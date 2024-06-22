import { Sequelize } from "sequelize";

export const jk_finance_db = new Sequelize("society","root","avinash",{
    dialect:"mysql"
})

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