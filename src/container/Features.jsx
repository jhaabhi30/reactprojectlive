import React from 'react';
import Card from "../component/Card/Card";
import { faCoffee, faClock, faBiking, faCarrot, faCartPlus   } from '@fortawesome/free-solid-svg-icons';
import Sdata from "../component/Meal/Sdata.jsx";


const Features= (props) =>{
    return(
        <div>
               <section className="section-features js--section-features" id="features">
                  <div className="row">
                      <h2>Get food fast &mdash; not fast food</h2>
                      <p className="long-copy">
                          Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
                      </p>
                  </div>
            
                  <div className="row js--wp-1 row animated fadeIn">
                      <div className="col-md-3 span-1-of-4 box">
                       
                        <Card icons={faBiking}  h3="UP TO 365 DAYS/YEAR " p="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style. " />

                      </div>
                      <div className="col-md-3 span-1-of-4 box">
                        <Card icons={faClock}  h3="READY IN 20 MINUTES " p="You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."/>

                      </div>
                      <div className="col-md-3 span-1-of-4 box">
                        <Card  icons={faCarrot} h3="100% ORGANIC" p="All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"/>

                      </div>
                      <div className="col-md-3 span-1-of-4 box">
                        <Card icons={faCartPlus}  h3="ORDER ANYTHING" p="We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!"/>

                      </div>

                  </div>
             </section>
             <div className="">
                       <figure class="meal-photo">
                       Sdata.map((item)=>
                        <div>
                        item.imgsrc
                        </div>
                        )
                        
                    </figure>
                    
                </div>

        </div>
    );
}
export default Features;