/*
====================================
SIWRAD Vision
Similarity Engine
Version : 2.0.0
Build   : 016
Codename: Similarity Engine v2
====================================
*/

const SimilarityEngine = {

    calculate(scanData, product){

        let score = 0;

        const detail = {
            dataset: 0,
            category: 0,
            name: 0,
            visual: 0
        };

        // Dataset Score (0 - 30)

        if(product.photos){

            const totalPhotos = Object.values(product.photos)
                .filter(photo => photo).length;

            detail.dataset = Math.round(
                (totalPhotos / 8) * 30
            );

            score += detail.dataset;

        }

        // Category Score (0 - 30)

        if(scanData.category &&
           scanData.category === product.category){

            detail.category = 30;
            score += detail.category;

        }

        // Product Name Score (0 - 20)

        if(scanData.name &&
           scanData.name === product.name){

            detail.name = 20;
            score += detail.name;

        }

        // Visual Score
        // Reserved Build 016.1

        return {

            product: product,
            score: score,
            detail: detail

        };

    },

    rank(scanData, products){

        const ranking = [];

        products.forEach((product)=>{

            ranking.push(
                this.calculate(scanData, product)
            );

        });

        ranking.sort((a,b)=>{

            return b.score - a.score;

        });

        return ranking;

    }

};