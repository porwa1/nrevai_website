        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
        });

        // Add smooth scrolling for navigation links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.remove('active');
                console.log('Navigation link clicked:', this.textContent);
            });
        });

        // Add click handlers for buttons
        document.getElementById('nav-cta-button').addEventListener('click', function() {
            console.log('Navigation CTA clicked');
        });

        document.getElementById('hero-primary-button').addEventListener('click', function() {
            console.log('Hero primary button clicked');
        });

        document.getElementById('hero-secondary-button').addEventListener('click', function() {
            console.log('Hero secondary button clicked');
        });

        document.addEventListener('DOMContentLoaded', function() {
            const ttcTabButtons = document.querySelectorAll('.ttc-tab-button');
            const ttcTabContents = document.querySelectorAll('.ttc-tab-content');
            
            // Preload all tab contents to ensure smooth transitions
            ttcTabContents.forEach(content => {
                // Force a reflow to ensure transitions work properly
                void content.offsetWidth;
            });
            
            ttcTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-ttc-tab');
                    
                    // Update tab button states
                    ttcTabButtons.forEach(btn => {
                        btn.classList.remove('ttc-active');
                        btn.classList.add('ttc-inactive');
                    });
                    this.classList.remove('ttc-inactive');
                    this.classList.add('ttc-active');
                    
                    // Update tab content visibility
                    ttcTabContents.forEach(content => {
                        if (content.getAttribute('data-ttc-tab-content') === targetTab) {
                            content.classList.add('ttc-active');
                        } else {
                            content.classList.remove('ttc-active');
                        }
                    });
                });
            });
        });

        // Add smooth scroll behavior and intersection observer for animations
        document.addEventListener('DOMContentLoaded', function() {
            // Intersection Observer for scroll-triggered animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe the testimonial container
            const testimonialContainer = document.querySelector('.testimonial-container');
            if (testimonialContainer) {
                observer.observe(testimonialContainer);
            }

            // Add hover effects
            testimonialContainer.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                this.style.transition = 'all 0.3s ease';
            });

            testimonialContainer.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0)';
            });

            // Add click to copy functionality
            testimonialContainer.addEventListener('click', function() {
                const testimonialText = document.querySelector('.testimonial-text').textContent;
                const authorName = document.querySelector('.author-name').textContent;
                const fullText = `"${testimonialText}" - ${authorName}`;
                
                navigator.clipboard.writeText(fullText).then(function() {
                    // Show a brief feedback
                    const originalBorder = testimonialContainer.style.border;
                    testimonialContainer.style.border = '2px solid #8b5cf6';
                    setTimeout(() => {
                        testimonialContainer.style.border = originalBorder;
                    }, 300);
                }).catch(function(err) {
                    console.log('Could not copy text: ', err);
                });
            });
        });

        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const faqIcon = element.querySelector('.faq-icon');
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            const allFaqItems = document.querySelectorAll('.faq-item');
            allFaqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    const answer = item.querySelector('.faq-answer');
                    const icon = item.querySelector('.faq-icon');
                    answer.classList.remove('expanded');
                    icon.textContent = '+';
                }
            });

            // Toggle current FAQ item
            if (isActive) {
                faqItem.classList.remove('active');
                faqAnswer.classList.remove('expanded');
                faqIcon.textContent = '+';
            } else {
                faqItem.classList.add('active');
                faqAnswer.classList.add('expanded');
                faqIcon.textContent = '−';
            }
        }

        // Initialize the component
        document.addEventListener('DOMContentLoaded', function() {
            // Add keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    const focusedElement = document.activeElement;
                    if (focusedElement.classList.contains('faq-question')) {
                        e.preventDefault();
                        toggleFAQ(focusedElement);
                    }
                }
            });

            // Make FAQ questions focusable for accessibility
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.setAttribute('tabindex', '0');
                question.setAttribute('role', 'button');
                question.setAttribute('aria-expanded', question.parentElement.classList.contains('active'));
            });

            // Add smooth scrolling when FAQ expands
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const target = mutation.target;
                        if (target.classList.contains('faq-item') && target.classList.contains('active')) {
                            setTimeout(() => {
                                target.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'nearest' 
                                });
                            }, 200);
                        }
                    }
                });
            });

            faqQuestions.forEach(question => {
                observer.observe(question.parentElement, { 
                    attributes: true, 
                    attributeFilter: ['class'] 
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Add click handlers for buttons
            const primaryBtn = document.querySelector('.nrev-button-dark');
            const secondaryBtn = document.querySelector('.nrev-button-light');
            
            if (primaryBtn) {
                primaryBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Get Early Access clicked');
                    
                    // Visual feedback
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            }
            
            if (secondaryBtn) {
                secondaryBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('See Nrev in action clicked');
                    
                    // Visual feedback
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            }
            
            // Add parallax effect on scroll
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const globe = document.querySelector('.nrev-globe-visual');
                const rate = scrolled * -0.5;
                
                if (globe) {
                    globe.style.transform = `translateY(${rate}px)`;
                }
            });
            
            // Add interactive hover effects for airplanes
            const airplanes = document.querySelectorAll('.nrev-plane-icon');
            airplanes.forEach(airplane => {
                airplane.addEventListener('mouseenter', function() {
                    this.style.transform += ' scale(1.2)';
                    this.style.transition = 'transform 0.3s ease';
                });
                
                airplane.addEventListener('mouseleave', function() {
                    this.style.transform = this.style.transform.replace(' scale(1.2)', '');
                });
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
            // Add smooth scroll for internal links
            const footerLinks = document.querySelectorAll('.nrev-footer-link');
            
            footerLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    console.log('Footer link clicked:', this.textContent);
                    
                    // Visual feedback
                    this.style.transform = 'translateX(5px)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                });
            });
            
            // Add logo click handler
            const logo = document.querySelector('.nrev-footer-logo');
            if (logo) {
                logo.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Logo clicked - navigate to home');
                    
                    // Visual feedback
                    const logoIcon = this.querySelector('.nrev-logo-icon');
                    if (logoIcon) {
                        logoIcon.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            logoIcon.style.transform = '';
                        }, 150);
                    }
                });
            }
            
            // Add intersection observer for animation
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            const footer = document.querySelector('.nrev-footer-wrapper');
            if (footer) {
                observer.observe(footer);
            }
        });

                // Modal functionality
                function openNrevModal() {
            const overlay = document.getElementById('nrevModalOverlay');
            const container = overlay.querySelector('.nrev-modal-container');
            
            overlay.classList.add('nrev-modal-active');
            container.classList.add('nrev-modal-entering');
            document.body.style.overflow = 'hidden';
            
            // Focus on email input
            setTimeout(() => {
                document.getElementById('nrevWorkEmail').focus();
            }, 300);
        }

        function closeNrevModal(event) {
            if (event && event.target !== event.currentTarget) return;
            
            const overlay = document.getElementById('nrevModalOverlay');
            const container = overlay.querySelector('.nrev-modal-container');
            
            overlay.classList.remove('nrev-modal-active');
            container.classList.remove('nrev-modal-entering');
            document.body.style.overflow = '';
            
            // Reset form after modal closes
            setTimeout(() => {
                resetNrevForm();
            }, 300);
        }

        function handleNrevFormSubmit(event) {
            event.preventDefault();
            
            const submitButton = document.getElementById('nrevSubmitButton');
            const successMessage = document.getElementById('nrevSuccessMessage');
            const form = document.getElementById('nrevEarlyAccessForm');
            const email = document.getElementById('nrevWorkEmail');
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            if (!email) {
                alert('Please enter a valid email address.');
                return;
            }

            // Prepare payload
            const payload = {
                email: email.value,
                form_type: 'waitlist'
            };
            console.log("before making request")
            // Send the POST request
            fetch('https://umws.public.staging.nurturev.com/user/submit-website-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.json();
            })
            .then(data => {
                // console.log('Waitlist submission successful:', data);
                successMessage.style.display = 'block';
                email.value = ''; // Clear input if needed
            })
            .catch(error => {
                console.error('Error submitting to waitlist:', error);
                alert('There was a problem submitting the form. Please try again.');
            }).finally(()=>{
            submitButton.disabled = false;
            submitButton.textContent = 'Get Early Access';
            })
            
        }

        function resetNrevForm() {
            const form = document.getElementById('nrevEarlyAccessForm');
            const successMessage = document.getElementById('nrevSuccessMessage');
            const submitButton = document.getElementById('nrevSubmitButton');
            
            form.style.display = 'flex';
            successMessage.style.display = 'none';
            submitButton.disabled = false;
            submitButton.textContent = 'Get Early Access';
            form.reset();
        }

        // Keyboard event handlers
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeNrevModal();
            }
        });

        // Prevent body scroll when modal is open
        document.addEventListener('DOMContentLoaded', function() {
            const overlay = document.getElementById('nrevModalOverlay');
            
            // Add transition end listener to clean up classes
            overlay.addEventListener('transitionend', function() {
                if (!overlay.classList.contains('nrev-modal-active')) {
                    overlay.querySelector('.nrev-modal-container').classList.remove('nrev-modal-entering');
                }
            });
        });

