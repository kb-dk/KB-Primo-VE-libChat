import {PrmExploreMainAfterConfig} from './chatbox/prmExploreMainAfter.component';
import {ChatBoxConfig} from './chatbox/chatBox.component';
import {scriptIds} from './chatbox/scriptIds.component';

angular.module('viewCustom')
    .constant('scriptIds', scriptIds)
    .component(PrmExploreMainAfterConfig.name, PrmExploreMainAfterConfig.config)
    .component(ChatBoxConfig.name, ChatBoxConfig.config);