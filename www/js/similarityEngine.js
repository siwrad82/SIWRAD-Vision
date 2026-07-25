/*
====================================
SIWRAD Vision
Similarity Engine
Version : 1.0.0
Build   : 015
====================================
*/

const SimilarityEngine = {

    calculate(scanData, product){

        let score = 0;

        // Prototype:
        // Hitung jumlah foto yang dimiliki dataset

        if(product.photos){

            Object.values(product.photos).forEach(function(photo){

                if(photo){
                    score++;
                }

            });

        }

        return {

            id: product.id,

            name: product.name,

            category: product.category,

            score: Math.round((score / 8) * 100),

            product: product

        };

    },

    rank(scanData, products){

        const results = [];

        products.forEach(function(product){

            results.push(
                this.calculate(scanData, product)
            );

        }, this);

        results.sort(function(a, b){

            return b.score - a.score;

        });

        return results;

    }

};