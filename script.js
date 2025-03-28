document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements - Landing Page
    const landingPage = document.getElementById('landing-page');
    const profileType = document.getElementById('profile-type');
    const startSurveyBtn = document.getElementById('start-survey');
    const progressContainer = document.getElementById('progress-container');
    
    // DOM Elements - Artist Form
    const artistForm = document.getElementById('artist-survey-form');
    const artistSteps = document.querySelectorAll('#artist-survey-form .form-step');
    const artistBackToLanding = document.getElementById('artist-back-to-landing');
    const artistSubmitBtn = document.getElementById('artist-submit');
    const artistSuccessMessage = document.getElementById('artist-success-message');
    const artistBackToStart = document.getElementById('artist-back-to-start');
    
    // DOM Elements - Geek Form
    const geekForm = document.getElementById('geek-survey-form');
    const geekSteps = document.querySelectorAll('#geek-survey-form .form-step');
    const geekBackToLanding = document.getElementById('geek-back-to-landing');
    const geekSubmitBtn = document.getElementById('geek-submit');
    const geekSuccessMessage = document.getElementById('geek-success-message');
    const geekBackToStart = document.getElementById('geek-back-to-start');
    
    // Progress Bar Elements
    const progressBar = document.getElementById('progress');
    const stepCircles = document.querySelectorAll('.step');
    const currentStepText = document.getElementById('current-step');
    
    // Current step trackers
    let currentArtistStep = 1;
    let currentGeekStep = 1;
    
    // Conditional Fields - Artist
    const artistGender = document.getElementById('artist-gender');
    const artistGenderOther = document.getElementById('artist-gender-other');
    
    const artistArea = document.getElementById('artist-area');
    const artistAreaOther = document.getElementById('artist-area-other');
    
    const artistPublish = document.getElementById('artist-publish');
    const artistPublishText = document.getElementById('artist-publish-text');
    
    const artistMarketplace = document.getElementById('artist-marketplace');
    const artistMarketplaceText = document.getElementById('artist-marketplace-text');
    
    const artistNft = document.getElementById('artist-nft');
    const artistNftText = document.getElementById('artist-nft-text');
    
    const artistCollab = document.getElementById('artist-collab');
    const artistCollabText = document.getElementById('artist-collab-text');
    
    const artistSubscription = document.getElementById('artist-subscription');
    const artistSubscriptionText = document.getElementById('artist-subscription-text');
    
    const artistChallengeOther = document.getElementById('artist-challenge-other');
    const artistChallengeOtherText = document.getElementById('artist-challenge-other-text');
    
    // Conditional Fields - Geek
    const geekGender = document.getElementById('geek-gender');
    const geekGenderOther = document.getElementById('geek-gender-other');
    
    const geekInterestOther = document.getElementById('geek-interest-other');
    const geekInterestOtherText = document.getElementById('geek-interest-other-text');
    
    const geekPlatforms = document.getElementById('geek-platforms');
    const geekPlatformsText = document.getElementById('geek-platforms-text');
    
    const geekProducts = document.getElementById('geek-products');
    const geekProductsText = document.getElementById('geek-products-text');
    
    const geekNft = document.getElementById('geek-nft');
    const geekNftText = document.getElementById('geek-nft-text');
    
    const geekSubscription = document.getElementById('geek-subscription');
    const geekSubscriptionText = document.getElementById('geek-subscription-text');
    
    const geekLikeOther = document.getElementById('geek-like-other');
    const geekLikeOtherText = document.getElementById('geek-like-other-text');
    
    const geekMerchandise = document.getElementById('geek-merchandise');
    const geekMerchandiseText = document.getElementById('geek-merchandise-text');
    
    // Initialize form
    initializeForm();
    
    // Event Listeners - Landing Page
    startSurveyBtn.addEventListener('click', function() {
        const selectedProfile = profileType.value;
        
        if (!selectedProfile) {
            alert('Por favor, selecione uma opção antes de continuar.');
            return;
        }
        
        landingPage.style.display = 'none';
        progressContainer.style.display = 'block';
        
        if (selectedProfile === 'artist') {
            artistForm.style.display = 'block';
            updateProgressBar(1, 6);
        } else if (selectedProfile === 'geek') {
            geekForm.style.display = 'block';
            updateProgressBar(1, 6);
        }
    });
    
    // Event Listeners - Artist Form Navigation
    artistBackToLanding.addEventListener('click', function() {
        artistForm.style.display = 'none';
        progressContainer.style.display = 'none';
        landingPage.style.display = 'block';
        resetForm('artist');
    });
    
    document.getElementById('artist-next-1').addEventListener('click', function() {
        if (validateArtistStep(1)) {
            goToArtistStep(2);
        }
    });
    
    document.getElementById('artist-back-2').addEventListener('click', function() {
        goToArtistStep(1);
    });
    
    document.getElementById('artist-next-2').addEventListener('click', function() {
        if (validateArtistStep(2)) {
            goToArtistStep(3);
        }
    });
    
    document.getElementById('artist-back-3').addEventListener('click', function() {
        goToArtistStep(2);
    });
    
    document.getElementById('artist-next-3').addEventListener('click', function() {
        if (validateArtistStep(3)) {
            goToArtistStep(4);
        }
    });
    
    document.getElementById('artist-back-4').addEventListener('click', function() {
        goToArtistStep(3);
    });
    
    document.getElementById('artist-next-4').addEventListener('click', function() {
        if (validateArtistStep(4)) {
            goToArtistStep(5);
        }
    });
    
    document.getElementById('artist-back-5').addEventListener('click', function() {
        goToArtistStep(4);
    });
    
    document.getElementById('artist-next-5').addEventListener('click', function() {
        if (validateArtistStep(5)) {
            goToArtistStep(6);
        }
    });
    
    document.getElementById('artist-back-6').addEventListener('click', function() {
        goToArtistStep(5);
    });
    
    // Event Listeners - Geek Form Navigation
    geekBackToLanding.addEventListener('click', function() {
        geekForm.style.display = 'none';
        progressContainer.style.display = 'none';
        landingPage.style.display = 'block';
        resetForm('geek');
    });
    
    document.getElementById('geek-next-1').addEventListener('click', function() {
        if (validateGeekStep(1)) {
            goToGeekStep(2);
        }
    });
    
    document.getElementById('geek-back-2').addEventListener('click', function() {
        goToGeekStep(1);
    });
    
    document.getElementById('geek-next-2').addEventListener('click', function() {
        if (validateGeekStep(2)) {
            goToGeekStep(3);
        }
    });
    
    document.getElementById('geek-back-3').addEventListener('click', function() {
        goToGeekStep(2);
    });
    
    document.getElementById('geek-next-3').addEventListener('click', function() {
        if (validateGeekStep(3)) {
            goToGeekStep(4);
        }
    });
    
    document.getElementById('geek-back-4').addEventListener('click', function() {
        goToGeekStep(3);
    });
    
    document.getElementById('geek-next-4').addEventListener('click', function() {
        if (validateGeekStep(4)) {
            goToGeekStep(5);
        }
    });
    
    document.getElementById('geek-back-5').addEventListener('click', function() {
        goToGeekStep(4);
    });
    
    document.getElementById('geek-next-5').addEventListener('click', function() {
        if (validateGeekStep(5)) {
            goToGeekStep(6);
        }
    });
    
    document.getElementById('geek-back-6').addEventListener('click', function() {
        goToGeekStep(5);
    });
    
    // Função para enviar dados para o Google Sheets
    async function submitToGoogleSheets(formData, formType) {
        try {
            // Adiciona o tipo de formulário aos dados
            formData.formType = formType === 'artist' ? 'Artista Digital' : 'Geek';
            
            // URL do seu Google Apps Script (substitua pela sua URL)
            const scriptURL = '19i966_OqmrXjoWBVWNdAkJquAzTQa7qn9U_xCJ__pUSKxONePT8vXSdd';
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (result.result === 'success') {
                console.log('Dados enviados com sucesso:', result);
                return true;
            } else {
                console.error('Erro ao enviar dados:', result);
                return false;
            }
        } catch (error) {
            console.error('Erro ao enviar dados para o Google Sheets:', error);
            return false;
        }
    }
    
    // Modifica o event listener do formulário de artista
    artistSubmitBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        if (validateArtistStep(6)) {
            // Collect form data
            const formData = collectFormData('artist');
            
            // Save to localStorage
            saveToLocalStorage('artist-survey-data', formData);
            
            // Envia para o Google Sheets
            const success = await submitToGoogleSheets(formData, 'artist');
            
            if (success) {
                // Show success message
                artistForm.style.display = 'none';
                progressContainer.style.display = 'none';
                artistSuccessMessage.style.display = 'block';
            } else {
                alert('Houve um erro ao enviar seus dados. Por favor, tente novamente.');
            }
        }
    });
    
    // Modifica o event listener do formulário de geek
    geekSubmitBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        if (validateGeekStep(6)) {
            // Collect form data
            const formData = collectFormData('geek');
            
            // Save to localStorage
            saveToLocalStorage('geek-survey-data', formData);
            
            // Envia para o Google Sheets
            const success = await submitToGoogleSheets(formData, 'geek');
            
            if (success) {
                // Show success message
                geekForm.style.display = 'none';
                progressContainer.style.display = 'none';
                geekSuccessMessage.style.display = 'block';
            } else {
                alert('Houve um erro ao enviar seus dados. Por favor, tente novamente.');
            }
        }
    });
    
    // Back to Start buttons
    artistBackToStart.addEventListener('click', function() {
        artistSuccessMessage.style.display = 'none';
        landingPage.style.display = 'block';
        resetForm('artist');
    });
    
    geekBackToStart.addEventListener('click', function() {
        geekSuccessMessage.style.display = 'none';
        landingPage.style.display = 'block';
        resetForm('geek');
    });
    
    // Conditional Fields - Artist
    artistGender.addEventListener('change', function() {
        artistGenderOther.style.display = this.value === 'Outro' ? 'block' : 'none';
    });
    
    artistArea.addEventListener('change', function() {
        artistAreaOther.style.display = this.value === 'Outro' ? 'block' : 'none';
    });
    
    artistPublish.addEventListener('change', function() {
        artistPublishText.style.display = this.value === 'Sim' ? 'block' : 'none';
    });
    
    artistMarketplace.addEventListener('change', function() {
        artistMarketplaceText.style.display = this.value === 'Talvez' ? 'block' : 'none';
    });
    
    artistNft.addEventListener('change', function() {
        artistNftText.style.display = this.value !== '' ? 'block' : 'none';
    });
    
    artistCollab.addEventListener('change', function() {
        artistCollabText.style.display = this.value === 'Depende' ? 'block' : 'none';
    });
    
    artistSubscription.addEventListener('change', function() {
        artistSubscriptionText.style.display = this.value === 'Sim' ? 'block' : 'none';
    });
    
    artistChallengeOther.addEventListener('change', function() {
        artistChallengeOtherText.style.display = this.checked ? 'block' : 'none';
    });
    
    // Conditional Fields - Geek
    geekGender.addEventListener('change', function() {
        geekGenderOther.style.display = this.value === 'Outro' ? 'block' : 'none';
    });
    
    geekInterestOther.addEventListener('change', function() {
        geekInterestOtherText.style.display = this.checked ? 'block' : 'none';
    });
    
    geekPlatforms.addEventListener('change', function() {
        geekPlatformsText.style.display = this.value === 'Sim' ? 'block' : 'none';
    });
    
    geekProducts.addEventListener('change', function() {
        geekProductsText.style.display = this.value === 'Talvez' ? 'block' : 'none';
    });
    
    geekNft.addEventListener('change', function() {
        geekNftText.style.display = this.value !== '' ? 'block' : 'none';
    });
    
    geekSubscription.addEventListener('change', function() {
        geekSubscriptionText.style.display = this.value === 'Sim' ? 'block' : 'none';
    });
    
    geekLikeOther.addEventListener('change', function() {
        geekLikeOtherText.style.display = this.checked ? 'block' : 'none';
    });
    
    geekMerchandise.addEventListener('change', function() {
        geekMerchandiseText.style.display = this.value === 'Sim' ? 'block' : 'none';
    });
    
    // Profile option click handlers
    document.querySelectorAll('.profile-option').forEach(function(option, index) {
        option.addEventListener('click', function() {
            profileType.selectedIndex = index + 1; // +1 because the first option is the placeholder
        });
    });
    
    // Functions
    function initializeForm() {
        // Hide all steps except the first one
        artistSteps.forEach((step, index) => {
            if (index !== 0) {
                step.classList.remove('active');
            }
        });
        
        geekSteps.forEach((step, index) => {
            if (index !== 0) {
                step.classList.remove('active');
            }
        });
        
        // Hide conditional fields
        const conditionalFields = document.querySelectorAll('.other-input');
        conditionalFields.forEach(field => {
            field.style.display = 'none';
        });
    }
    
    function goToArtistStep(step) {
        // Hide all steps
        artistSteps.forEach(s => s.classList.remove('active'));
        
        // Show the current step
        artistSteps[step - 1].classList.add('active');
        
        // Update progress
        currentArtistStep = step;
        updateProgressBar(step, 6);
        
        // Scroll to top of form
        artistForm.scrollIntoView({ behavior: 'smooth' });
    }
    
    function goToGeekStep(step) {
        // Hide all steps
        geekSteps.forEach(s => s.classList.remove('active'));
        
        // Show the current step
        geekSteps[step - 1].classList.add('active');
        
        // Update progress
        currentGeekStep = step;
        updateProgressBar(step, 6);
        
        // Scroll to top of form
        geekForm.scrollIntoView({ behavior: 'smooth' });
    }
    
    function updateProgressBar(currentStep, totalSteps) {
        // Update progress bar width
        const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressBar.style.width = `${progressWidth}%`;
        
        // Update step circles
        stepCircles.forEach((circle, idx) => {
            if (idx + 1 <= currentStep) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
        
        // Update step text
        currentStepText.textContent = currentStep;
    }
    
    function validateArtistStep(step) {
        let isValid = true;
        
        // Reset all error messages
        const errorMessages = document.querySelectorAll('#artist-survey-form .error-message');
        errorMessages.forEach(error => {
            error.style.display = 'none';
        });
        
        // Step 1 validation
        if (step === 1) {
            const age = document.getElementById('artist-age');
            const gender = document.getElementById('artist-gender');
            const genderOther = document.getElementById('artist-gender-other');
            const area = document.getElementById('artist-area');
            const areaOther = document.getElementById('artist-area-other');
            
            if (!age.value) {
                showError('artist-age-error', 'Por favor, selecione sua faixa etária.');
                isValid = false;
            }
            
            if (!gender.value) {
                showError('artist-gender-error', 'Por favor, selecione seu gênero.');
                isValid = false;
            } else if (gender.value === 'Outro' && !genderOther.value.trim()) {
                showError('artist-gender-error', 'Por favor, especifique seu gênero.');
                isValid = false;
            }
            
            if (!area.value) {
                showError('artist-area-error', 'Por favor, selecione sua principal área de atuação.');
                isValid = false;
            } else if (area.value === 'Outro' && !areaOther.value.trim()) {
                showError('artist-area-error', 'Por favor, especifique sua área de atuação.');
                isValid = false;
            }
        }
        
        // Step 2 validation
        else if (step === 2) {
            const time = document.getElementById('artist-time');
            const publish = document.getElementById('artist-publish');
            const publishText = document.getElementById('artist-publish-text');
            
            if (!time.value) {
                showError('artist-time-error', 'Por favor, selecione quanto tempo você dedica à criação de arte por semana.');
                isValid = false;
            }
            
            if (!publish.value) {
                showError('artist-publish-error', 'Por favor, informe se você já publica ou vende sua arte em plataformas digitais.');
                isValid = false;
            } else if (publish.value === 'Sim' && !publishText.value.trim()) {
                showError('artist-publish-error', 'Por favor, informe quais plataformas você utiliza.');
                isValid = false;
            }
        }
        
        // Step 3 validation
        else if (step === 3) {
            const webtoonInterest = document.getElementById('artist-webtoon-interest');
            const marketplace = document.getElementById('artist-marketplace');
            const marketplaceText = document.getElementById('artist-marketplace-text');
            const nft = document.getElementById('artist-nft');
            
            if (!webtoonInterest.value) {
                showError('artist-webtoon-interest-error', 'Por favor, selecione seu nível de interesse em publicar webtoons ou web novels.');
                isValid = false;
            }
            
            if (!marketplace.value) {
                showError('artist-marketplace-error', 'Por favor, informe se você usaria um marketplace para vender produtos com sua arte.');
                isValid = false;
            } else if (marketplace.value === 'Talvez' && !marketplaceText.value.trim()) {
                showError('artist-marketplace-error', 'Por favor, explique por quê.');
                isValid = false;
            }
            
            if (!nft.value) {
                showError('artist-nft-error', 'Por favor, selecione o que você acha de oferecer commissions via NFT.');
                isValid = false;
            }
        }
        
        // Step 4 validation
        else if (step === 4) {
            const support = document.getElementById('artist-support');
            const collab = document.getElementById('artist-collab');
            const collabText = document.getElementById('artist-collab-text');
            const agency = document.getElementById('artist-agency');
            
            if (!support.value) {
                showError('artist-support-error', 'Por favor, selecione a importância de um programa de apoio para você.');
                isValid = false;
            }
            
            if (!collab.value) {
                showError('artist-collab-error', 'Por favor, informe se você gostaria de colaborar com outros artistas.');
                isValid = false;
            } else if (collab.value === 'Depende' && !collabText.value.trim()) {
                showError('artist-collab-error', 'Por favor, explique de quê depende.');
                isValid = false;
            }
            
            if (!agency.value) {
                showError('artist-agency-error', 'Por favor, selecione se um serviço de agenciamento com curadoria seria útil para você.');
                isValid = false;
            }
        }
        
        // Step 5 validation
        else if (step === 5) {
            const subscription = document.getElementById('artist-subscription');
            const subscriptionText = document.getElementById('artist-subscription-text');
            const challenges = document.querySelectorAll('input[name="artist-challenges"]:checked');
            const challengeOther = document.getElementById('artist-challenge-other');
            const challengeOtherText = document.getElementById('artist-challenge-other-text');
            
            if (!subscription.value) {
                showError('artist-subscription-error', 'Por favor, informe se você pagaria por uma assinatura para ferramentas premium.');
                isValid = false;
            } else if (subscription.value === 'Sim' && !subscriptionText.value.trim()) {
                showError('artist-subscription-error', 'Por favor, informe qual valor estaria disposto a pagar.');
                isValid = false;
            }
            
            if (challenges.length === 0) {
                showError('artist-challenges-error', 'Por favor, selecione pelo menos um desafio.');
                isValid = false;
            } else if (challengeOther.checked && !challengeOtherText.value.trim()) {
                showError('artist-challenges-error', 'Por favor, especifique quais outros desafios você enfrenta.');
                isValid = false;
            }
        }
        
        // Step 6 validation
        else if (step === 6) {
            const features = document.getElementById('artist-features');
            
            if (!features.value.trim()) {
                showError('artist-features-error', 'Por favor, informe quais funcionalidades ou recursos você gostaria de ver.');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    function validateGeekStep(step) {
        let isValid = true;
        
        // Reset all error messages
        const errorMessages = document.querySelectorAll('#geek-survey-form .error-message');
        errorMessages.forEach(error => {
            error.style.display = 'none';
        });
        
        // Step 1 validation
        if (step === 1) {
            const age = document.getElementById('geek-age');
            const gender = document.getElementById('geek-gender');
            const genderOther = document.getElementById('geek-gender-other');
            const interests = document.querySelectorAll('input[name="geek-interests"]:checked');
            const interestOther = document.getElementById('geek-interest-other');
            const interestOtherText = document.getElementById('geek-interest-other-text');
            
            if (!age.value) {
                showError('geek-age-error', 'Por favor, selecione sua faixa etária.');
                isValid = false;
            }
            
            if (!gender.value) {
                showError('geek-gender-error', 'Por favor, selecione seu gênero.');
                isValid = false;
            } else if (gender.value === 'Outro' && !genderOther.value.trim()) {
                showError('geek-gender-error', 'Por favor, especifique seu gênero.');
                isValid = false;
            }
            
            if (interests.length === 0) {
                showError('geek-interests-error', 'Por favor, selecione pelo menos um interesse principal.');
                isValid = false;
            } else if (interestOther.checked && !interestOtherText.value.trim()) {
                showError('geek-interests-error', 'Por favor, especifique quais outros interesses você tem.');
                isValid = false;
            }
        }
        
        // Step 2 validation
        else if (step === 2) {
            const time = document.getElementById('geek-time');
            const platforms = document.getElementById('geek-platforms');
            const platformsText = document.getElementById('geek-platforms-text');
            
            if (!time.value) {
                showError('geek-time-error', 'Por favor, selecione quantas horas por semana você dedica a conteúdo geek.');
                isValid = false;
            }
            
            if (!platforms.value) {
                showError('geek-platforms-error', 'Por favor, informe se você usa plataformas de webtoons ou web novels.');
                isValid = false;
            } else if (platforms.value === 'Sim' && !platformsText.value.trim()) {
                showError('geek-platforms-error', 'Por favor, informe quais plataformas você utiliza.');
                isValid = false;
            }
        }
        
        // Step 3 validation
        else if (step === 3) {
            const platformInterest = document.getElementById('geek-platform-interest');
            const products = document.getElementById('geek-products');
            const productsText = document.getElementById('geek-products-text');
            const nft = document.getElementById('geek-nft');
            
            if (!platformInterest.value) {
                showError('geek-platform-interest-error', 'Por favor, selecione seu nível de interesse em uma plataforma com webtoons e web novels.');
                isValid = false;
            }
            
            if (!products.value) {
                showError('geek-products-error', 'Por favor, informe se você compraria produtos personalizados de webtoons ou novels.');
                isValid = false;
            } else if (products.value === 'Talvez' && !productsText.value.trim()) {
                showError('geek-products-error', 'Por favor, explique por quê.');
                isValid = false;
            }
            
            if (!nft.value) {
                showError('geek-nft-error', 'Por favor, selecione o que você acha de commissions via NFT.');
                isValid = false;
            }
        }
        
        // Step 4 validation
        else if (step === 4) {
            const subscription = document.getElementById('geek-subscription');
            const subscriptionText = document.getElementById('geek-subscription-text');
            const interaction = document.getElementById('geek-interaction');
            
            if (!subscription.value) {
                showError('geek-subscription-error', 'Por favor, informe se você pagaria uma assinatura por conteúdo premium.');
                isValid = false;
            } else if (subscription.value === 'Sim' && !subscriptionText.value.trim()) {
                showError('geek-subscription-error', 'Por favor, informe qual valor estaria disposto a pagar.');
                isValid = false;
            }
            
            if (!interaction.value) {
                showError('geek-interaction-error', 'Por favor, selecione a importância de interagir com artistas para você.');
                isValid = false;
            }
        }
        
        // Step 5 validation
        else if (step === 5) {
            const likes = document.querySelectorAll('input[name="geek-likes"]:checked');
            const likeOther = document.getElementById('geek-like-other');
            const likeOtherText = document.getElementById('geek-like-other-text');
            const merchandise = document.getElementById('geek-merchandise');
            const merchandiseText = document.getElementById('geek-merchandise-text');
            
            if (likes.length === 0) {
                showError('geek-likes-error', 'Por favor, selecione pelo menos uma característica que você gosta em plataformas de webtoons ou web novels.');
                isValid = false;
            } else if (likeOther.checked && !likeOtherText.value.trim()) {
                showError('geek-likes-error', 'Por favor, especifique o que mais você gosta em plataformas de webtoons ou web novels.');
                isValid = false;
            }
            
            if (!merchandise.value) {
                showError('geek-merchandise-error', 'Por favor, informe se você já comprou merchandise de histórias ou artistas favoritos.');
                isValid = false;
            } else if (merchandise.value === 'Sim' && !merchandiseText.value.trim()) {
                showError('geek-merchandise-error', 'Por favor, informe quais produtos você comprou.');
                isValid = false;
            }
        }
        
        // Step 6 validation
        else if (step === 6) {
            const content = document.getElementById('geek-content');
            
            if (!content.value.trim()) {
                showError('geek-content-error', 'Por favor, informe que tipo de conteúdo ou produtos você gostaria de ver.');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function collectFormData(formType) {
        const formData = {};
        let form;
        
        if (formType === 'artist') {
            form = artistForm;
        } else if (formType === 'geek') {
            form = geekForm;
        }
        
        // Collect all input, select, and textarea values
        const inputs = form.querySelectorAll('input[type="text"], select, textarea');
        inputs.forEach(input => {
            if (input.name && input.style.display !== 'none') {
                formData[input.name] = input.value;
            }
        });
        
        // Collect checkbox values
        const checkboxGroups = {};
        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            if (checkbox.name) {
                if (!checkboxGroups[checkbox.name]) {
                    checkboxGroups[checkbox.name] = [];
                }
                checkboxGroups[checkbox.name].push(checkbox.value);
            }
        });
        
        // Add checkbox groups to formData
        for (const [name, values] of Object.entries(checkboxGroups)) {
            formData[name] = values.join(', ');
        }
        
        // Add timestamp
        formData.timestamp = new Date().toISOString();
        
        return formData;
    }
    
    function saveToLocalStorage(key, data) {
        // Get existing data if any
        let existingData = localStorage.getItem(key);
        let allData = [];
        
        if (existingData) {
            try {
                allData = JSON.parse(existingData);
                if (!Array.isArray(allData)) {
                    allData = [allData];
                }
            } catch (e) {
                console.error('Error parsing existing data:', e);
                allData = [];
            }
        }
        
        // Add new data
        allData.push(data);
        
        // Save back to localStorage
        localStorage.setItem(key, JSON.stringify(allData));
    }
    
    function resetForm(formType) {
        if (formType === 'artist') {
            // Reset current step
            currentArtistStep = 1;
            
            // Reset form fields
            artistForm.reset();
            
            // Hide all steps except the first one
            artistSteps.forEach((step, index) => {
                if (index === 0) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
            
            // Hide conditional fields
            const conditionalFields = artistForm.querySelectorAll('.other-input');
            conditionalFields.forEach(field => {
                field.style.display = 'none';
            });
        } else if (formType === 'geek') {
            // Reset current step
            currentGeekStep = 1;
            
            // Reset form fields
            geekForm.reset();
            
            // Hide all steps except the first one
            geekSteps.forEach((step, index) => {
                if (index === 0) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
            
            // Hide conditional fields
            const conditionalFields = geekForm.querySelectorAll('.other-input');
            conditionalFields.forEach(field => {
                field.style.display = 'none';
            });
        }
    }
});
