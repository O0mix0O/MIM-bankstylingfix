(function () {
    function applyStyles() {
        const bankTabMenuUL = document.querySelector("#bank-tab-menu > div > ul");
        const tabPaneDivs = document.querySelectorAll("#bank-tab-menu > div > div.block-content.tab-content > div.tab-pane > div");

        let changesApplied = false;

        if (bankTabMenuUL && !bankTabMenuUL.dataset.centered) {
            bankTabMenuUL.style.display = "flex";
            bankTabMenuUL.style.justifyContent = "center";
            bankTabMenuUL.dataset.centered = "true";
            changesApplied = true;
        }

        if (tabPaneDivs.length > 0) {
            tabPaneDivs.forEach((div) => {
                if (!div.dataset.centered) {
                    div.style.display = "flex";
                    div.style.justifyContent = "center";
                    div.dataset.centered = "true";
                    changesApplied = true;
                }
            });
        }

        if (changesApplied) {
        }
    }

    const observer = new MutationObserver(() => {
        applyStyles();

        const bankTabMenuUL = document.querySelector("#bank-tab-menu > div > ul");
        const tabPaneDivs = document.querySelectorAll("#bank-tab-menu > div > div.block-content.tab-content > div.tab-pane > div");

        if (bankTabMenuUL && tabPaneDivs.length > 0) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
