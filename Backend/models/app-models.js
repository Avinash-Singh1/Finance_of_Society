import { Sequelize } from "sequelize";

const rdsConfig = {
    database: "society",
    username: "admin",
    password: "admin123",
    host: "mydb.cr0k6kqm0z49.ap-south-1.rds.amazonaws.com", // e.g., "your-instance-name.region.rds.amazonaws.com"
    port: 3306, // Default MySQL port
    dialect: "mysql",
    logging: false, // Disable logging; set to true if you want to see SQL queries
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  

export const jk_finance_db = new Sequelize("society","root","avinash",{
    dialect:"mysql"
})

// export const jk_finance_db = new Sequelize(rdsConfig.database, rdsConfig.username, rdsConfig.password, {
//     host: rdsConfig.host,
//     port: rdsConfig.port,
//     dialect: rdsConfig.dialect,
//     pool: rdsConfig.pool,
//     logging: rdsConfig.logging
//   });

export const jk_finance_User=jk_finance_db.define('register',{
   
   
    name:{
        type: Sequelize.DataTypes.STRING
    },
    email:{
        type: Sequelize.DataTypes.STRING
    },
    password:{
        type: Sequelize.DataTypes.STRING,
        
    },
    role:{
        type: Sequelize.DataTypes.INTEGER,
        
    },
    active:{
        type: Sequelize.DataTypes.INTEGER,
        
    }
   },{
    tableName: 'register',
    feezeTableName:true,
    timestamps: false
   });