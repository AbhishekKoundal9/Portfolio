/* ==========================================
   Abhishek Koundal Portfolio - Interactive Logic
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Dynamic Typing Effect tailored to Abhishek's CV
    const typingText = document.getElementById('typing-text');
    const roles = [
        "AI & Machine Learning Engineering",
        "Agentic AI & Autonomous Agents",
        "NLP & Deep Learning Systems",
        "PyTorch & TensorFlow Models",
        "FastAPI Backend Microservices"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 90;
    let erasingDelay = 45;
    let newRoleDelay = 2200;

    function type() {
        if (!typingText) return;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 90;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = newRoleDelay;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }

        setTimeout(type, typingDelay);
    }
    setTimeout(type, 800);

    // 3. Dark / Light Theme Switching & Persistence
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.contains('light-theme');
            if (isLight) {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('portfolio-theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('portfolio-theme', 'light');
            }
        });
    }

    // 4. Navbar Sticky Scroll & Active Link Observer
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-pill-item');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // 5. Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
            });
        });
    }

    // 6. Project Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // 7. Project Details Modal Logic
    const projectsData = {
        "1": {
            tag: "AI / ML & Agentic AI",
            title: "AI Real Estate Analyzer and Recommender",
            desc: "An AI/ML-powered web application for predicting property prices and delivering automated investment recommendations.",
            features: [
                "Predictive ML model estimating real-estate prices based on location, area, number of bedrooms, and property attributes.",
                "Investment analysis suite computing ROI, Rental Yield, Investment Score, Future Price Estimation, and Risk Classification.",
                "Intelligent BUY, HOLD, or AVOID recommendation decision system driven by predicted investment potential.",
                "Integrated machine learning backend with FastAPI microservices and responsive web client."
            ],
            tech: ["Python", "Machine Learning", "FastAPI", "Agentic AI", "Scikit-learn", "React"]
        },
        "2": {
            tag: "NLP & Deep Learning",
            title: "AI Text Summarization Application",
            desc: "AI text processing application supporting both extractive and abstractive document summarization.",
            features: [
                "Abstractive text summarization powered by DistilBART transformer models.",
                "Extractive summarization using LexRank algorithm to isolate key sentence passages.",
                "FastAPI backend supporting multi-format document uploads (PDF, TXT) and web URL extraction.",
                "Export capability generating formatted Microsoft Word (.docx) summaries."
            ],
            tech: ["Python", "NLP", "Deep Learning", "DistilBART", "LexRank", "FastAPI", "PyTorch"]
        },
        "3": {
            tag: "Agentic AI & Training",
            title: "Agentic AI & Machine Learning Suite",
            desc: "Comprehensive Agentic AI platform built during specialization training at LPU.",
            features: [
                "Exploratory Data Analysis (EDA) pipelines using NumPy and Pandas for dataset preprocessing.",
                "Trained and evaluated Scikit-learn models including Linear Regression, KNN, SVM, Decision Trees, K-Means, and Ensembles.",
                "Created autonomous AI agents capable of tool interaction, API calls, and external knowledge integration.",
                "Agentic AI workflow design implementing automated reasoning, multi-step planning, and decision-making loops."
            ],
            tech: ["Agentic AI", "Python", "LLMs", "Scikit-learn", "Pandas", "NumPy", "PyTorch"]
        }
    };

    const modal = document.getElementById('project-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalFeatures = document.getElementById('modal-features');
    const modalTech = document.getElementById('modal-tech');
    const openModalBtns = document.querySelectorAll('.open-modal');

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (!data || !modal) return;

        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        modalFeatures.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.textContent = feat;
            modalFeatures.appendChild(li);
        });

        modalTech.innerHTML = '';
        data.tech.forEach(t => {
            const span = document.createElement('span');
            span.className = 'skill-chip';
            span.textContent = t;
            modalTech.appendChild(span);
        });

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.currentTarget.getAttribute('data-project');
            openModal(projectId);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // 8. Certificate Modal Zoom View
    const certsData = {
        "gen_ai": {
            tag: "SFJ & NASSCOM Skill Development",
            title: "GEN AI NASSCOM Certificate of Completion",
            img: "assets/certificates/gen_ai_nasscom.png"
        },
        "linux": {
            tag: "Skillera MOOC & Proctored Examination",
            title: "Linux Commands and Shell Scripting Certificate",
            img: "assets/certificates/linux_commands.png"
        },
        "comm": {
            tag: "Skillera MOOC & Proctored Examination",
            title: "Effective Communication Skills Certificate",
            img: "assets/certificates/effective_communication.png"
        }
    };

    const certModal = document.getElementById('cert-modal');
    const certModalOverlay = document.getElementById('cert-modal-overlay');
    const certModalClose = document.getElementById('cert-modal-close');
    const certModalTag = document.getElementById('cert-modal-tag');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certModalImg = document.getElementById('cert-modal-img');
    const openCertModalBtns = document.querySelectorAll('.open-cert-modal');

    function openCertModal(certKey) {
        const data = certsData[certKey];
        if (!data || !certModal) return;

        certModalTag.textContent = data.tag;
        certModalTitle.textContent = data.title;
        certModalImg.src = data.img;

        certModal.classList.add('active');
        certModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
        if (!certModal) return;
        certModal.classList.remove('active');
        certModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    openCertModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const certKey = e.currentTarget.getAttribute('data-cert');
            openCertModal(certKey);
        });
    });

    if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
    if (certModalOverlay) certModalOverlay.addEventListener('click', closeCertModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeCertModal();
        }
    });

    // 9. Contact Form Client-side Validation & Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            function setError(input, isErr) {
                const group = input.parentElement;
                if (isErr) {
                    group.classList.add('error');
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            }

            setError(nameInput, !nameInput.value.trim());

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setError(emailInput, !emailRegex.test(emailInput.value.trim()));

            setError(subjectInput, !subjectInput.value.trim());

            setError(messageInput, !messageInput.value.trim());

            if (isValid) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! Your message has been sent to Abhishek Koundal.';
                contactForm.reset();

                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.className = 'form-status';
                }, 6000);
            }
        });
    }
});
