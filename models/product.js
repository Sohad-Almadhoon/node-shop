const db = require("../util/database");
const Cart = require("./cart");
module.exports = class Product {
  constructor(id, title, imgUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "insert into products(title,imgUrl , description,price) values(? , ? , ? , ?)",
      [this.title, this.imgUrl, this.description, this.price]
    );
  }

  static deleteById(id) {
    return db.execute("delete from products where id = ?", [id]);
  }
  static fetchAll() {
    return db.execute("select * from products");
  }
  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
