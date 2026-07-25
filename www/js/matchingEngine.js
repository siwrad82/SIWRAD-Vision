/*
====================================
SIWRAD Vision
Matching Engine
Version : 1.0.0
Build   : 014
====================================
*/

const MatchingEngine = {

    match(scanData){

    const products = DatabaseEngine.getProducts();

    if(products.length === 0){
        return null;
    }

    let bestProduct = null;
    let bestScore = -1;

    products.forEach(function(product){

        let score = 0;

        if(product.photos){

            Object.values(product.photos).forEach(function(photo){

                if(photo){
                    score++;
                }

            });

        }

        if(score > bestScore){

            bestScore = score;
            bestProduct = product;

        }

    });

    return {

        product: bestProduct,

        similarity: Math.round((bestScore / 8) * 100)

    };

    }