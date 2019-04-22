import React, { Component } from 'react'

import './ContentBlock.scss'

import Typer from '../typer.js'

class ContentBlock extends Component {
    render() {
        const {
            image = true,
            content: {
                title,
                imageHoverContent,
                description,
                button: { text, link } = {},
            } = {},
        } = this.props

        const contentImage = image ? (
            <div className='content-block-image'>
                <div
                    className='content-block-image-text'
                    dangerouslySetInnerHTML={
                        imageHoverContent
                            ? { __html: imageHoverContent }
                            : `Veggies es bonus vobis, proinde vos postulo essum magis
                    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
                    azuki bean garlic.`
                    }
                />
            </div>
        ) : (
            ''
        )

        return (
            <div className='content-block section'>
                <div className='content-block-container'>
                    {contentImage}
                    <div className='content-block-text'>
                        <h1 className='content-block-text-header'>
                            {title ? title : `Our Services`}
                        </h1>
                        <p>
                            {description
                                ? description
                                : `Veggies es bonus vobis, proinde vos postulo essum
                            magis kohlrabi welsh onion daikon amaranth tatsoi
                            tomatillo melon azuki bean garlic. Gumbo beet greens
                            corn soko endive gumbo gourd. Parsley shallot
                            courgette tatsoi pea sprouts fava bean collard
                            greens dandelion okra wakame tomato. Dandelion
                            cucumber earthnut pea peanut soko zucchini. Turnip
                            greens yarrow ricebean rutabaga endive cauliflower
                            sea lettuce kohlrabi amaranth water spinach avocado
                            daikon napa cabbage asparagus winter purslane kale.
                            Celery potato scallion desert raisin horseradish
                            spinach carrot soko. Lotus root water spinach fennel
                            kombu maize bamboo shoot green bean swiss chard
                            seakale pumpkin onion chickpea gram corn pea.
                            Brussels sprout coriander water chestnut gourd swiss
                            chard wakame kohlrabi beetroot carrot watercress.
                            Corn amaranth salsify bunya nuts nori azuki bean
                            chickweed potato bell pepper artichoke.`}
                        </p>

                        <a
                            className={`content-block-text-button ${
                                image ? '' : '-left-align'
                            }`}
                            href={link ? link : 'google.com'}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {text ? text : `Learn More`}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentBlock
