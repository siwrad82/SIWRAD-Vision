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

        const ranking = SimilarityEngine.rank(scanData, products);

        const scanTime = Date.now();

return {

    product: ranking[0].product,

    similarity: ranking[0].score,

    ranking: ranking,

    totalProduct: products.length,

    totalCandidate: ranking.length,

    scanTime: scanTime

};

    