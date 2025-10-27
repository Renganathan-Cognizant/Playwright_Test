import {test} from '../../Fixtures/pomfixture'

test("login", async({loginpage,checkoutpage,productselection})=>{

    //login
    await loginpage.launchApp()
    await loginpage.login()

    //to select product
    await productselection.SelectProduct()

    //checkout
    await checkoutpage.checkout()

})
