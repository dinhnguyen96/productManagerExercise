
    products = [new Product(1,"Điện thoại iPhone 14 Pro Max 128GB",
                              33590000,"https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg",
                            "Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend tương tự thế hệ iPhone 13 series"),
                new Product(2,"Điện thoại OPPO Reno8 Z 5G",
                           9490000,"https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-1.jpg",
                                                  "Cảm nhận đầu tiên của mình khi trên tay chiếc OPPO Reno8 Z 5G là máy có thiết kế rất đẹp, từ màu sắc cho đến cách tạo hình đều làm mình hài lòng"),
                new Product(3,"Điện thoại Vivo Y35 ",
                     6590000, "https://cdn.tgdd.vn/Products/Images/42/286697/vivo-y35-vang-1.jpg",
                      "Vivo Y35 có kích thước màn hình 6.58 inch đi cùng là tấm nền IPS LCD, độ phân giải Full HD+ với những thông số trên chất lượng hình ảnh hiển thị có chi tiết tốt, góc nhìn rộng và màu sắc trung thực")];

    function productListDisplay()
    {
        let content = "";
        for (let i = 0; i < products.length; i++)
        {
            content += `<tr>
                            <td>${products[i].getProductId()}</td>
                            <td>${products[i].getProductName()}</td>
                            <td>${products[i].getProductPrice()}</td>
                            <td><img src= "${products[i].getProductImage()}" width="100" height="100"></td>
                            <td>${products[i].getProductDescribe()}</td>
                            <td><button type="button" onclick="productInfo('${i}')">Details</button> </td>
                            <td><button type="button" onclick="productRemove('${i}')">Delete</button> </td>
                        </tr>`;
        }
        document.getElementById("productData").innerHTML = content;
    }
    productListDisplay();

    function productRemove(index)
    {
        for (let i = index; i < products.length-1;i++)
        {
            products[i] = products[i+1];
        }
        products.length--;

        productListDisplay();
    }

    function productAdd()
    {
        let productId = +document.getElementById("productId").value;
        let productName = document.getElementById("productName").value;
        let productPrice = +document.getElementById("productPrice").value;
        let  productImage = document.getElementById("productImages").value;
        let productDescribe = document.getElementById("productDescribe").value;
        for (let value of products )
        {
            if (value.getProductId() === productId)
            {
                alert("Exitst Id !");
            }
        }
        products[products.length] = new Product(productId, productName, productPrice, productImage, productDescribe);
        productListDisplay();
    }

    function productInfo(index)
    {
        let product = products[index];
        document.getElementById("productId").value = product.getProductId();
        document.getElementById("productName").value = product.getProductName();
        document.getElementById("productPrice").value = product.getProductPrice();
        document.getElementById("productImages").value = product.getProductImage();
        document.getElementById("productDescribe").value = product.getProductDescribe();
    }
    function productUpdate()
    {
        let productId = +document.getElementById("productId").value;
        let productName = document.getElementById("productName").value;
        let productPrice = +document.getElementById("productPrice").value;
        let  productImage = document.getElementById("productImages").value;
        let productDescribe = document.getElementById("productDescribe").value;

        products[productId-1].setProductName(productName) ;
        products[productId-1].setProductPrice(productPrice) ;
        products[productId-1].setProductImage(productImage) ;
        products[productId-1].setProductDescribe(productDescribe) ;

        productListDisplay();
    }

