class Product{

    productId
    productName
    productPrice

    productImage

    productDescribe

    constructor(productId, productName,productPrice,productImage, productDescribe)
    {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.productDescribe = productDescribe;
    }

    getProductId(){
        return this.productId;
    }
    setProductId(productId)
    {
        this.productId = productId;
    }
    getProductName(){
        return this.productName;
    }
    setProductName(productName)
    {
        this.productName = productName;
    }
    getProductPrice(){
        return this.productPrice;
    }
    setProductPrice(productPrice)
    {
        this.productPrice = productPrice;
    }
    getProductImage(){
        return this.productImage;
    }
    setProductImage(productImage)
    {
        this.productImage = productImage;
    }
    getProductDescribe(){
        return this.productDescribe;
    }
    setProductDescribe(productDescribe)
    {
        this.productDescribe = productDescribe;
    }


}