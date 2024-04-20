import React, { useEffect } from 'react'

const ProductCard = ({ columns, data}) => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                data.map((product, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.cardHeader}>
                            <div style={styles.cardHeaderInfo}>
                                <div style={styles.title}>{product.title}</div>
                                <div>{product.website}</div>
                            </div>
                            <div style={styles.cardFooterInfo}>
                                <div>{product.rating}</div>
                                <div style={styles.price}>{product.price}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
		borderBottom: "1px solid #eee",
        borderRadius: "0.5em",
		padding: "0.5em",
        boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1)",
	},
    cardHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "80px"
    },
    cardHeaderInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        gap: "4px"
    },
    cardFooter: {
        display: "flex",
        flexDirection: "column",
    },
    cardFooterInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end"
    },
    title: {
        fontSize: "0.8em",
        fontWeight: "bold"
    },
    price: {
        textAlign: "right"
    }
}
export default ProductCard
