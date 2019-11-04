import {PrmExploreMainAfterConfig} from './chatbox/prmExploreMainAfter.component';
import {ChatBoxConfig} from './chatbox/chatBox.component';

angular.module('viewCustom')
    .component(PrmExploreMainAfterConfig.name, PrmExploreMainAfterConfig.config)
    .component(ChatBoxConfig.name, ChatBoxConfig.config);