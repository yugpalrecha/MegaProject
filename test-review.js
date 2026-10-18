   const password = "admin12345";

   function divide(a, b) {
     return a / b;
   }

   function getUser(id) {
     return db.query("SELECT * FROM users WHERE id = " + id);
   }
