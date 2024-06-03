import React from "react";
import iphone1 from "../assests/iphone1.png";
import circle from "../assests/circle.png";
import img3 from "../assests/img3.1.png";
import icon from "../assests/Icon.png";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import testi from "../assests/testi.png"
import color from "../assests/color.png"
import pic from "../assests/pic.png"

const Feature = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="mt-[200px]">
        <div className="md:flex justify-between ">
          <div className="flex  w-[620px] items-center relative  ">
            <img
              className="w-[400px] ml-40 mt-[70px] z-10 absolute "
              src={iphone1}
            ></img>
            <img className="relative mb-20 mr-40" src={img3}></img>
            <img className="w-[1000px] h-[700px] absolute" src={circle}></img>
          </div>
          {/* Features Section */}
          <section className="p-4 max-w-[620px]">
            <div className="ml-5 mt-[60px]">
              <p className="font-bold text-xl text-[#FF5555]">FEATURES</p>
              <h2 className="text-4xl font-bold mb-6">Uifry Premium</h2>
              <div className="my-4">
                <div className="my-2">
                  <div className="flex items-center border my-auto mb-2">
                    <img className="w-[21px] h-[21px] mr-2" src={icon}></img>
                    <h3 className="text-xl font-bold ">Budgeting Intervals</h3>
                  </div>

                  <p className="text-gray-600">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc Sociis Natoque
                    Aliquet Faucibus Tristique Etiam Adipiscing Scelerisque.
                  </p>
                </div>
                <div className="my-2">
                  <div className="flex items-center border my-auto mb-2">
                    <img className="w-[21px] h-[21px] mr-2" src={icon1}></img>
                    <h3 className="text-xl font-bold mb-2">
                      Budgeting Intervals
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc Sociis Natoque
                    Aliquet Faucibus Tristique Etiam Adipiscing Scelerisque.
                  </p>
                </div>
                <div className="my-2">
                  <div className="flex items-center border my-auto mb-2">
                    <img className="w-[21px] h-[21px] mr-2" src={icon2}></img>
                    <h3 className="text-xl font-bold mb-2">
                      Budgeting Intervals
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc Sociis Natoque
                    Aliquet Faucibus Tristique Etiam Adipiscing Scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="md:flex justify-between">
            {/* Advantages Section */}
            <section className="m-20 max-w-[520px] items-center">
              <div className="ml-5 mt-[60px]">
                <p className="font-bold text-xl text-[#FF5555]">ADVANTAGES</p>
                <h2 className="text-3xl font-bold mb-6">Why Choose Uifry?</h2>
                <div className="my-4">
                  <div className="my-2">
                    <div className="flex items-center border my-auto mb-2">
                      <img className="w-[21px] h-[21px] mr-2" src={icon}></img>
                      <h3 className="text-xl font-bold ">
                        Clever Notifications
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                      ultricies. In ultrices malesuada elit mauris etiam odio.
                      Duis tristique lacus, et blandit viverra nisl velit. Sed
                      mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                      Lectus eget eget ac dolor neque lorem sapien, suspendisse
                      aliquam.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex  w-[620px] items-center relative ">
              <img
                className="w-[400px] ml-40 mt-[70px] z-10 absolute "
                src={iphone1}
              ></img>
              <img className="relative mb-20 mr-40" src={img3}></img>
              <img className="w-[1000px] h-[700px] absolute" src={circle}></img>
            </div>
          </div>
        </div>



<div>
<div className="md:flex justify-between ">
          <div className="flex  w-[620px] items-center relative">
            <img
              className="w-[400px] ml-40 mt-[70px] z-10 absolute "
              src={iphone1}
            ></img>
            <img className="relative mb-20 mr-40" src={img3}></img>
            <img className="w-[1000px] h-[700px] absolute" src={circle}></img>
          </div>
          {/* next (fully customizable) Section */}
          <section className="p-2 max-w-[620px] my-auto items-center  mr-16">
            <div className="ml-5 mt-[60px]">
                <div className=" items-center w-[500px] h-[200px] mr-15 mx-auto">
                  <div className="flex items-center border my-auto mb-2 ">
                    <img className="w-[21px] h-[21px] mr-2 " src={icon}></img>
                    <h3 className="text-2xl font-bold  ">Fully Customaziable</h3>
                  </div>
                  <p className=" w-[400px] md:w-[520px] text-gray-600  mx-auto">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                      ultricies. In ultrices malesuada elit mauris etiam odio.
                      Duis tristique lacus, et blandit viverra nisl velit. Sed
                      mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                      Lectus eget eget ac dolor neque lorem sapien, suspendisse
                      aliquam.
                  </p>
                </div>
            </div>
          </section>
        </div>   
</div>




      {/* Testimonials Section */}
      <section className="">
       
        <div className="text-center ">
        <p className="text-2xl">TESTINOMIAL</p>
        <h2 className="text-4xl font-bold">What Our Users <br></br> <span >Say About Us?</span></h2>
        </div>

        <div className="md:flex justify-between w-[620px] md:w-[1240px] ">
          <div className="flex  items-center relative">
            <img className="mb-[50px] ml-4 absolute" src={color}></img>
            <img className="ml-6 w-[850px] h-[650px] relative mb-[50px]" src={testi}></img>
        
          </div>
          {/* accounting */}
          <section className=" h-[300px] mt-[120px] items-center  mr-24 ">
            <div className="ml-5">
                <div className=" items-center w-[500px]  mr-15">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold mx-auto">The Best Financial Accounting<br></br> App Ever</h3>
                  </div>
                  <p className="text-gray-600 w-[360px] ml-[80px]">
                    "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                      ultricies. In ultrices malesuada elit mauris etiam odio.
                      Duis tristique lacus, et blandit viverra nisl velit. Sed
                      mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                      Lectus eget eget ac dolor neque lorem sapien, suspendisse
                      aliquam."
                  </p>
                <div className="mt-3 ml-20 md:">
                <img className="" src={pic}></img>
                  <p className="mt-2 font-bold ">Nick Jones</p>
                </div>
                
                </div>
            </div>
          </section>
        </div> 
       
      </section>

 


  

      </div>
    </div>
  );
};

export default Feature;
