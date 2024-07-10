import React, { useEffect } from "react";
import "./Testimonial.css";

export default function Testimonials() {
  useEffect(() => {
    $(document).ready(function () {
      $(".testimonial .indicators li").click(function () {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass("active");
        targetElement.not(targetElement[i]).removeClass("active");
      });
      $(".testimonial .tabs li").click(function () {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass("active");
        targetElement.not($(this)).removeClass("active");
      });
    });
    $(document).ready(function () {
      $(".slider .swiper-pagination span").each(function (i) {
        $(this)
          .text(i + 1)
          .prepend("0");
      });
    });
  }, []);

  return (
    <>
      <section class="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-none d-lg-block">
              <ol class="carousel-indicators tabs">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                >
                  <figure>
                    <img
                      src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                      class="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                  <figure>
                    <img
                      src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                      class="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                  <figure>
                    <img
                      src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                      class="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
              </ol>
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
              <div
                id="carouselExampleIndicators"
                data-interval="false"
                class="carousel slide"
                data-ride="carousel"
              >
                <h3>WHAT OUR CUSTOMERS SAY</h3>
                <h1>TESTIMONIALS</h1>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="quote-wrapper">
                      <p>
                        Snap Snacks exceeded my expectations for a fast-food
                        restaurant. With delicious food, friendly service, and a
                        welcoming atmosphere, it's a place I would definitely
                        recommend to anyone looking for a quick, tasty meal.
                        I’ll certainly be back to try more items from their
                        menu!
                        <br />
                        Rating: 🧡🧡🧡🧡🧡
                      </p>
                      <h3>peter lee</h3>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="quote-wrapper">
                      <p>
                        If you're looking for a quick, satisfying meal with
                        great service and a pleasant environment, Snap Snacks is
                        the place to go.
                        <br />
                        Rating: ⭐⭐⭐⭐⭐
                      </p>
                      <h3>peter lee</h3>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="quote-wrapper">
                      <p>
                        Snap Snacks delivers on its promise of tasty fast food
                        with excellent service. I’ll definitely be coming back
                        to try more of their menu.
                        <br />
                        Rating: ⭐⭐⭐⭐⭐
                      </p>
                      <h3>peter lee</h3>
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
