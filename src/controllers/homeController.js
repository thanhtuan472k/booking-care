import db from '../models/index';
import CRUDService from '../services/CRUDSevice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs', {
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
};

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
};

let getCRUD = (req, res) => {
    res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('-----------------');
    console.log(data);
    console.log('-----------------');
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    });
};

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
};
