window.addEventListener('scroll',()=>{
  if(window.scrollY<document.querySelector('#cardId').offsetTop){
    document.querySelector('#particles-js').style.position = 'fixed'
  }else{
    document.querySelector('#particles-js').style.position = 'absolute'
  }
})

    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#FFD700"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#FFFF00"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 15,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FFD700",
            "opacity": 1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 5
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });



      var validateEmail = function(elementValue) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }
    $('#email').keyup(function() {
     
        var value = $(this).val();
        var valid = validateEmail(value);
     
        if (!valid) {
            $(this).css('color', 'red');
        $('.addbut1').prop('disabled', true);
        } else {
            $(this).css('color', '#2bb673');
        $('.addbut1').prop('disabled', false);
        }
    });
     
    const newsletter = {};
     
    newsletter.main = document.querySelector('.main');
    newsletter.form = document.querySelector('.main > #singular-form');
    newsletter.subs = document.querySelector('.main > #singular-form > button#subs');
    newsletter.input = document.querySelector('.main>#singular-form>#email-input>input');
    newsletter.submitButton = document.querySelector('.main > #singular-form > #email-input > button');
    newsletter.successMessage = document.querySelector('.main > #singular-form > #success');
     
    newsletter.submitDelay = 1000;
     
    newsletter.clickHandler = (e) => {
        switch (e.target) {
            case newsletter.subs:
                console.log('case subs');
                newsletter.main.style.width = '37rem'
                e.target.classList.remove('shown');
                newsletter.input.classList.add('shown');
                newsletter.submitButton.classList.add('shown');
                newsletter.input.focus();
                break;
            case newsletter.submitButton:
                newsletter.submitForm();
                break;
        }
    }
    newsletter.handleInputKeypress = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            newsletter.submitForm();
        }
    }
    newsletter.submitForm = () => {
        newsletter.input.style.transition = 'all .6s ease';
        newsletter.submitButton.style.transition = 'all .6s ease';
        newsletter.input.classList.remove('shown');
        newsletter.submitButton.classList.remove('shown');
        newsletter.main.style.transition = 'all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
        newsletter.main.style.width = '';
        newsletter.successMessage.classList.add('shown');
        let submission = setTimeout(() => newsletter.form.submit(), newsletter.submitDelay);
    }
     
    newsletter.input.addEventListener('keypress', (e) => newsletter.handleInputKeypress(e));
    document.addEventListener('click', (e) => newsletter.clickHandler(e));
