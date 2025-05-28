document.addEventListener('DOMContentLoaded', function() {
    const marketingServicesItems = document.querySelectorAll('.marketing-services__item');
    const marketingServicesDinamicContentItems = document.querySelectorAll('.marketing-services__dinamic-content-item');

        marketingServicesItems.forEach(item => {
            item.addEventListener('click', function() {
                const action = this.getAttribute('data-action');

                marketingServicesItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                marketingServicesDinamicContentItems.forEach(content => content.classList.add('hidden'));
                
                const targetContent = document.querySelector(`.marketing-services__dinamic-content-item[data-action="${action}"]`);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                }
        });
    });
});