class ChatBoxController {
    constructor($scope, $location, scriptIds) {
        this.$scope = $scope;
        this.$location = $location;
        this.scriptIds = scriptIds;
    }

    $onInit() {
        this.constructChatBoxScriptUrl();
        return this.loadChatBoxScript();
    }

    constructChatBoxScriptUrl() {
        let scriptUrlBase = 'https://region-eu.libanswers.com/load_chat.php?hash=';
        this.scriptId = this.scriptIds[this.current()];
        this.scriptUrl = scriptUrlBase + this.scriptId;
    }

    loadChatBoxScript() {
        var script = document.createElement('script');

        script.src = this.scriptUrl;

        document.body.appendChild(script);
        return script;
    }

    $onDestroy() {
        this.unload(this.scriptUrl, 'js');
        console.log('Chat box destroyed!');
    }

    unload(fileName) {
        let allSuspects = document.getElementsByTagName("script");
        // Search backwards within nodelist for matching elements to remove
        for (let i = allSuspects.length; i >= 0; i--) {
            if (allSuspects[i] && allSuspects[i].getAttribute("src") != null && allSuspects[i].getAttribute("src").indexOf(fileName) != -1)
            // Remove element by calling parentNode.removeChild()
                allSuspects[i].parentNode.removeChild(allSuspects[i])
        }
    }

    current() {
        return this.$location.search().lang;
    }

}

ChatBoxController.$inject = ['$scope', '$location', 'scriptIds'];


export let ChatBoxConfig = {
    name: 'rexChatBox',
    config: {
        controller: ChatBoxController,
        template:`<div id="libchat_{{ $ctrl.scriptId }}></div>`,
    }
};