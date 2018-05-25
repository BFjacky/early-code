module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            console.log(app.config.cluster);
        }
    }
    return HomeController;
}