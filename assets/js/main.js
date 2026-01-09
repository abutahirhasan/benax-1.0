(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
			/* ================================
       Mobile Menu Js Start
    ================================ */

			$("#mobile-menu").meanmenu({
				meanMenuContainer: ".mobile-menu",
				meanScreenWidth: "1199",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			$("#mobile-menus").meanmenu({
				meanMenuContainer: ".mobile-menus",
				meanScreenWidth: "19920",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			$documentOn.on("click", ".mean-expand", function () {
				let icon = $(this).find("i");

				if (icon.hasClass("fa-plus")) {
					icon.removeClass("fa-plus").addClass("fa-minus");
				} else {
					icon.removeClass("fa-minus").addClass("fa-plus");
				}
			});

			/* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

			// Open offcanvas
			$(".sidebar__toggle").on("click", function () {
				$(".offcanvas__info").addClass("info-open");
				$(".offcanvas__overlay").addClass("overlay-open");

				// Hide sticky item
				$(".sidebar-sticky-item").fadeOut().removeClass("active");
			});

			// Close offcanvas
			$(".offcanvas__close, .offcanvas__overlay").on("click", function () {
				$(".offcanvas__info").removeClass("info-open");
				$(".offcanvas__overlay").removeClass("overlay-open");

				// Show sticky item
				$(".sidebar-sticky-item").fadeIn().addClass("active");
			});

			/* ================================
        Body Overlay Js Start
        ================================ */

			$(".body-overlay").on("click", function () {
				$(".offcanvas__area").removeClass("offcanvas-opened");
				$(".df-search-area").removeClass("opened");
				$(".body-overlay").removeClass("opened");

				// Show sticky item when overlay clicked
				$(".sidebar-sticky-item").fadeIn().addClass("active");
			});

			/* ================================
        Offcanvas Link Click (Optional)
        ================================ */

			$(".offcanvas a").on("click", function () {
				$(".sidebar-sticky-item").fadeIn().addClass("active");
			});

			/* ================================
       Sticky Header Js Start
    ================================ */

			$windowOn.on("scroll", function () {
				if ($(this).scrollTop() > 250) {
					$("#header-sticky").addClass("sticky");
				} else {
					$("#header-sticky").removeClass("sticky");
				}
			});

			

			/* ================================
       Video & Image Popup Js Start
    ================================ */

			$(".img-popup").magnificPopup({
				type: "image",
				gallery: {
					enabled: true,
				},
			});

			$(".video-popup").magnificPopup({
				type: "iframe",
				callbacks: {},
			});

			/* ================================
       Counterup Js Start
    ================================ */

			$(".count").counterUp({
				delay: 15,
				time: 4000,
			});

			/* ================================
       Wow Animation Js Start
    ================================ */

			new WOW().init();

			/* ================================
       Nice Select Js Start
    ================================ */

			if ($(".single-select").length) {
				$(".single-select").niceSelect();
			}

			/* ================================
       Parallaxie Js Start
    ================================ */

			if ($(".parallaxie").length && $(window).width() > 991) {
				if ($(window).width() > 768) {
					$(".parallaxie").parallaxie({
						speed: 0.55,
						offset: 0,
					});
				}
			}

			/* ================================
      Brand Slider Js Start
    ================================ */
			if ($(".brand-slider").length > 0) {
				const brandSlider = new Swiper(".brand-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},

					breakpoints: {
						1399: {
							slidesPerView: 6,
						},
						1199: {
							slidesPerView: 5,
						},
						991: {
							slidesPerView: 4,
						},
						767: {
							slidesPerView: 3,
						},
						575: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 2,
						},
					},
				});
			}

			//>> Testimonial Slider Start <<//
			if ($(".testimonial-slider").length > 0) {
				const TestimonialSlider = new Swiper(".testimonial-slider", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cuss-swiper-pagination",
						clickable: true,
					},
					navigation: {
						nextEl: ".testimonial-next",
						prevEl: ".testimonial-prev",
					},
					breakpoints: {
						1199: {
							slidesPerView: 1,
						},
						991: {
							slidesPerView: 1,
						},
						767: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			if ($(".testi-slider").length > 0) {
				const TestiSlider = new Swiper(".testi-slider", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
				
					navigation: {
						nextEl: ".testimonial-next",
						prevEl: ".testimonial-prev",
					},
					breakpoints: {
						1199: {
							slidesPerView: 3,
						},
						991: {
							slidesPerView: 2,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> business-slide-wrap Start <<//
			if ($(".working-wrapper6").length > 0) {
				const workingWrapper6 = new Swiper(".working-wrapper6", {
					spaceBetween: 0,
					speed: 1300,
					loop: true,
					centeredSlides: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".working-pagination",
						clickable: true,
						renderBullet: function (index, className) {
							return (
								'<span class="' +
								className +
								'">' +
								(index + 1) +
								"</span>"
							);
						},
					},
					breakpoints: {
						1199: {
							slidesPerView: 3.5,
						},
						991: {
							slidesPerView: 2.9,
						},
						767: {
							slidesPerView: 2.1,
						},
						575: {
							slidesPerView: 1.8,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> business-slide-wrap Start <<//
			if ($(".business-slide-wrap").length > 0) {
				const businessSlideWrap = new Swiper(".business-slide-wrap", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					centeredSlides: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination3",
						clickable: true,
					},
					breakpoints: {
						1199: {
							slidesPerView: 3.5,
						},
						991: {
							slidesPerView: 2.9,
						},
						767: {
							slidesPerView: 2.1,
						},
						575: {
							slidesPerView: 1.8,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}
			//>> business-slide-wrap Start <<//
			if ($(".business-slide-wrap03").length > 0) {
				const businessSlideWrap = new Swiper(".business-slide-wrap03", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					centeredSlides: false,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination3",
						clickable: true,
					},
					breakpoints: {
						1399: {
							slidesPerView: 4,
						},
						1199: {
							slidesPerView: 3.5,
						},
						991: {
							slidesPerView: 2.8,
						},
						767: {
							slidesPerView: 2.3,
						},
						575: {
							slidesPerView: 1.4,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//New Slide add benax
			//>> Testimonial Slider Start <<//
			if ($(".testimonial-slider01").length > 0) {
				const TestimonialSlider01 = new Swiper(".testimonial-slider01", {
					spaceBetween: 0,
					speed: 1300,
					centeredSlides: true,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination",
						clickable: true,
						renderBullet: function (index, className) {
							// Limit bullets to max 4
							if (index < 4) {
								return '<span class="' + className + '"></span>';
							}
							return ""; // don't render extra bullets
						},
					},

					breakpoints: {
						1199: {
							slidesPerView: 5.2,
						},
						991: {
							slidesPerView: 4.2,
						},
						767: {
							slidesPerView: 3.2,
						},
						575: {
							slidesPerView: 2.2,
						},
						0: {
							slidesPerView: 1.1,
							spaceBetween: 20,
						},
					},
				});
			}

			//>> project-solution-wrap Start <<//
			if ($(".project-solution-wrap").length > 0) {
				const projectSolutionWrap = new Swiper(".project-solution-wrap", {
					spaceBetween: 20,
					loop: true,
					freemode: true,
					slidesPerView: 1,
					centeredSlides: false,
					allowTouchMove: false,
					speed: 5000,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination",
						clickable: true,
						renderBullet: function (index, className) {
							// Limit bullets to max 4
							if (index < 4) {
								return '<span class="' + className + '"></span>';
							}
							return ""; // don't render extra bullets
						},
					},

					breakpoints: {
						1199: {
							slidesPerView: 5,
						},
						991: {
							slidesPerView: 4.2,
						},
						767: {
							slidesPerView: 3.2,
						},
						575: {
							slidesPerView: 2.2,
						},
						0: {
							slidesPerView: 1.1,
							spaceBetween: 20,
						},
					},
				});
			}
			//>>
			if ($(".testimonial-slider-service").length > 0) {
				const sliderEl = document.querySelector(".testimonial-slider-service");

				const slider = new Swiper(sliderEl, {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					on: {
						init: function () {
							const realSlides = sliderEl.querySelectorAll(
								".swiper-slide:not(.swiper-slide-duplicate)"
							).length;

							document.querySelector(
								".slider-fraction .total"
							).innerText = realSlides;

							document.querySelector(
								".slider-fraction .current"
							).innerText = this.realIndex + 1;
						},

						slideChange: function () {
							document.querySelector(
								".slider-fraction .current"
							).innerText = this.realIndex + 1;
						},
					},
					breakpoints: {
						1199: { slidesPerView: 1 },
						991: { slidesPerView: 1 },
						767: { slidesPerView: 1 },
						575: { slidesPerView: 1 },
						0: { slidesPerView: 1 },
					},
				});
			}


			//Project Slide 07

			/* ================================
      Global Service Box Js Start
    ================================ */

		if (document.querySelectorAll(".service-quick-item").length) {
		const serviceQuickItem = document.querySelectorAll(".service-quick-item");

		serviceQuickItem.forEach((box) => {
			const hoverImg = box.querySelector(".hover-thumb");
			if (!hoverImg) return;

			box.addEventListener("mousemove", (event) => {
			const rect = box.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;

			hoverImg.style.opacity = "1";
			hoverImg.style.visibility = "visible";
			hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(10deg)`;
			});

			box.addEventListener("mouseleave", () => {
			hoverImg.style.opacity = "0";
			hoverImg.style.visibility = "hidden";
			hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
			});
		});
    }

			/* ================================
        Mouse Cursor Animation Js Start
    ================================ */

			if ($(".mouseCursor").length > 0) {
			    function itCursor() {
			        var myCursor = jQuery(".mouseCursor");
			        if (myCursor.length) {
			            if ($("body")) {
			                const e = document.querySelector(".cursor-inner"),
			                    t = document.querySelector(".cursor-outer");
			                let n, i = 0, o = !1;
			                window.onmousemove = function(s) {
			                    if (!o) {
			                        t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
			                    }
			                    e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
			                    n = s.clientY;
			                    i = s.clientX;
			                };
			                $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
			                    e.classList.add("cursor-hover");
			                    t.classList.add("cursor-hover");
			                });
			                $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
			                    if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
			                        e.classList.remove("cursor-hover");
			                        t.classList.remove("cursor-hover");
			                    }
			                });
			                e.style.visibility = "visible";
			                t.style.visibility = "visible";
			            }
			        }
			    }
			    itCursor();
			}

			/* ================================
        Back To Top Button Js Start
    ================================ */
			$(window).on("scroll", function () {
				var windowScrollTop = $(window).scrollTop();

				if (windowScrollTop > 150) {
					$("#back-top").addClass("show");
				} else {
					$("#back-top").removeClass("show");
				}
			});

			$(document).on("click", "#back-top", function (e) {
				e.preventDefault();
				$("html, body").animate({ scrollTop: 0 }, 800);
			});



			/* ================================
       Search Popup Toggle Js Start
    ================================ */

			if ($(".search-toggler").length) {
				$(".search-toggler").on("click", function (e) {
					e.preventDefault();
					$(".search-popup").toggleClass("active");
					$("body").toggleClass("locked");
				});
			}

			/* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
			if ($("#smooth-wrapper").length && $("#smooth-content").length) {
				gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

				gsap.config({
					nullTargetWarn: false,
				});

				let smoother = ScrollSmoother.create({
					wrapper: "#smooth-wrapper",
					content: "#smooth-content",
					smooth: 2,
					effects: true,
					smoothTouch: 0.1,
					normalizeScroll: false,
					ignoreMobileResize: true,
				});
			}

			/* ================================
       Text Anim Js Start
    ================================ */

	if ($(".text-anim").length) {
		let staggerAmount = 0.03,
			translateXValue = 20,
			delayValue = 0.1,
			easeType = "power2.out",
			animatedTextElements = document.querySelectorAll(".text-anim");

		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, {
				type: "chars, words",
			});

			// ScrollTrigger দিয়ে section এ ঢুকলে animation শুরু হবে
			ScrollTrigger.create({
				trigger: element,
				start: "top 85%",
				onEnter: () => {
					gsap.from(animationSplitText.chars, {
						duration: 1,
						delay: delayValue,
						x: translateXValue,
						autoAlpha: 0,
						stagger: staggerAmount,
						ease: easeType,
					});
				},
			});
		});
	}

	 // Text on Windows  Animation Start
    // Animation-1
    let tHero = gsap.timeline();

    let heading_title = new SplitText(".sec-title-1", { type: "chars" });
    let heading_char = heading_title.chars;

    tHero.from(heading_char, {
      rotate: 20,
      ease: "back.out",
      opacity: 0,
      duration: .8,
      stagger: 0.1,
    });

	 if($('.tz-sub-tilte').length) {
      var agtsub = $(".tz-sub-tilte");

      if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-sub-anim') ){
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "7",
          });
        }

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

    if($('.tz-itm-title').length) {
		var txtheading = $(".tz-itm-title");

    if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-itm-anim') ){
          gsap.set(el.split.chars, {
            opacity: .3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

	if ($('.char-animation').length > 0) {
		let char_come = gsap.utils.toArray(".char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'

			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
			{
				duration: 1,
				delay: 0.5,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05
			});
		});
		}

	if (document.querySelectorAll('.design-choose-item-wrap').length) {

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {

    document.querySelectorAll('.design-choose-item-wrap').forEach(wrap => {

      const items1 = wrap.querySelectorAll('.design-choose-item-1');

      items1.forEach(item1 => {
        const col = item1.closest('.col-xl-6');
        const nextCol = col?.nextElementSibling;
        const item2 = nextCol?.querySelector('.design-choose-item-2');

        if (!item2) return;

        // initial state
        gsap.set(item1, { x: -350, rotate: -25 });
        gsap.set(item2, { x: 350, rotate: 25 });

        gsap.timeline({
          scrollTrigger: {
            trigger: col,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
          }
        })
        .to(item1, {
          x: 0,
          rotate: 0,
          ease: "power2.out"
        })
        .to(item2, {
          x: 0,
          rotate: 0,
          ease: "power2.out"
        }, 0);
      });

    });

  });
	}

	gsap.utils.toArray('.bz-gsap-animate-circle').forEach((el, index) => {
        let arspin = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 1,
                start: "top 100%",
                end: "top -50%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        arspin
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { rotate: 0}, { rotate: 180, duration: 2, immediateRender: false})
    });

	 // circular-shape-wrapper
	if (document.querySelectorAll(".circular-shape-wrapper").length > 0) {

	gsap.registerPlugin(ScrollTrigger);

	let cs = gsap.timeline({
		scrollTrigger: {
		trigger: ".circular-shape-wrapper",
		start: "top top",
		end: "+=150%",
		pin: true,
		scrub: 1.5, // smoothness control
		}
	});

	// background color animation
	cs.to(".circular-shape-wrapper", {
		backgroundColor: "#fcf7f3",
		duration: 1,
		ease: "power2.inOut"
	}, 0);

	// image animation
	cs.to(".globe-circle img", {
		scale: 25,           
		rotation: 90,
		opacity: 1,
		ease: "power3.inOut",
		duration: 2
	}, 0);
	}

	if (document.querySelectorAll(".circular-shape-wrapper2").length > 0) {

	gsap.registerPlugin(ScrollTrigger);

	let cs = gsap.timeline({
		scrollTrigger: {
		trigger: ".circular-shape-wrapper2",
		start: "top top",
		end: "+=150%",
		pin: true,
		scrub: 1.5, // smoothness control
		}
	});

	// background color animation
	cs.to(".circular-shape-wrapper2", {
		backgroundColor: "#171717",
		duration: 1,
		ease: "power2.inOut"
	}, 0);

	// image animation
	cs.to(".globe-circle2 img", {
		scale: 25,           
		rotation: 90,
		opacity: 1,
		ease: "power3.inOut",
		duration: 2
	}, 0);
	}

	    /* ================================
       Approach Anim Js Start
    ================================ */

   if (document.querySelectorAll(".approach-area").length > 0) {

    const mm = gsap.matchMedia();

		mm.add("(min-width: 1199px)", () => {

			// Right to Left (existing)
			const boxesRight = document.querySelectorAll(".approach-area .approach-box");

			gsap.from(boxesRight, {
				x: "100%",
				duration: 1,
				stagger: 0.3,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".approach-wrapper-box",
					start: "top 100%",
					end: "bottom 40%",
					scrub: 2,
					toggleActions: "play none none reverse",
				},
			});

			// Left to Right (new)
			const boxesLeft = document.querySelectorAll(".approach-area .approach-box2");

			gsap.from(boxesLeft, {
				x: "-100%",
				duration: 1,
				stagger: 0.3,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".approach-wrapper-box",
					start: "top 100%",
					end: "bottom 40%",
					scrub: 2,
					toggleActions: "play none none reverse",
				},
			});

		});
	}

	 /* ================================
       News Panel Js Start
    ================================ */

	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-news-panel');
		let baseOffset = 120;
		let offsetIncrement = 10;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 50%",
					endTrigger: '.tp-news-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});

	 /* ================================
       Project Anim Js Start
    ================================ */

	if ($('.tp-project-5-2-area').length) {

	$('.tp-project-5-2-area').each(function (index, element) {

		let $area = $(element);
		let title = $area.find('.tp-project-5-2-title');

		let project_text = gsap.timeline({
			scrollTrigger: {
				trigger: $area[0],
				start: 'top center-=250',
				end: 'bottom 50%',
				pin: title[0],
				pinSpacing: false,
				scrub: 1,
				markers: false
			}
		});

		project_text
			.set(title, {
				scale: 0.6
			})
			.to(title, {
				scale: 1,
				duration: 2
			})
			.to(title, {
				scale: 1,
				duration: 2
			}, "+=2")
			.to(title, {
				autoAlpha: 0,
				duration: 2
			});

	});

	}

	 if (document.querySelector(".des-portfolio-wrap")) {
        const pr = ScrollTrigger.matchMedia();

        pr.add("(min-width: 1199px)", () => {

            const sections = document.querySelectorAll(".des-portfolio-panel");
            const wrap = document.querySelector(".des-portfolio-wrap");

            if (!sections.length || !wrap) return;

            // Initial state
            gsap.set(sections, { scale: 1 });

            // Animate each section except the last one
            sections.forEach((section, index) => {
                const isLast = index === sections.length - 1;

                gsap.to(section, {
                    scale: isLast ? 1 : 0.8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 14%",
                        end: "bottom 80%",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        endTrigger: wrap,
                        markers: false,
                    },
                });
            });

            // Cleanup on condition change
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }

	  /* ================================
       Sticky Js Start
    ================================ */

    let pr = gsap.matchMedia();
	pr.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let panels = document.querySelectorAll('.tp-panel-pin')
		panels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 14%',
					end: "bottom 62%",
					endTrigger: '.tp-panel-pin-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});


			
	}); // End Document Ready Function

     /* ================================
       Preloader Js Start
    ================================ */

     function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();


$(document).ready(function () {
	// When an item starts to open
	$(".accordion").on("show.bs.collapse", function (e) {
		$(e.target).closest(".accordion-item").addClass("is-active");
	});

	// When an item starts to close
	$(".accordion").on("hide.bs.collapse", function (e) {
		$(e.target).closest(".accordion-item").removeClass("is-active");
	});
});


$(document).ready(function () {
	$("#priceSwitcher").on("change", function () {
		const isMonthly = $(this).is(":checked");

		$(".amount").each(function () {
			const monthlyPrice = $(this).data("monthly");
			const yearlyPrice = $(this).data("yearly");

			// Animate number change
			$(this).text(isMonthly ? monthlyPrice : yearlyPrice);
		});

		$(".period").text(isMonthly ? "Monthly" : "Yearly");
	});
});
  
  })(jQuery); // End jQuery

