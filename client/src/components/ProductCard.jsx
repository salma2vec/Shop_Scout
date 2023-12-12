import React from 'react'

const ProductCard = ({product}) => {
    return (
        <div style={styles.card}>
            <div style={styles.cardHeader}>
                <p style={styles.title}>Product name</p>
                <div style={styles.cardHeaderInfo}>
                    <strong>{product.title}</strong> 
                    <img src={product.image} width={32} height={32} alt={product.title} />
                </div>
            </div>
            <div style={styles.cardFooter}>
                <div style={styles.cardFooterInfo}>
                    <p>From {product.website}</p>
                    <p>Ratings {product.rating}</p>
                    <p>Total reviews {product.reviews}</p>
                </div>
                <p style={styles.price}>$ {product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
		borderBottom: "1px solid #eee",
		padding: "10px 0",
	},
    cardHeader: {
        display: "flex",
        flexDirection: "column",
    },
    cardHeaderInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "4px"
    },
    cardFooter: {
        display: "flex",
        flexDirection: "column",
    },
    cardFooterInfo: {
        display: "flex",
        justifyContent: "space-between"
    },
    title: {
        fontSize: "12px",
        fontWeight: "bold"
    },
    price: {
        textAlign: "right"
    }
}
export default ProductCard
