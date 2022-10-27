/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');



async function extendedFeatures() {
    try {
        await bootstrapExtra()
        console.log('Scripting API Extra loaded successfully');
		
		WA.room.area.onEnter('ApothekeRoom').subscribe(() => {
			WA.room.hideLayer("Apotheke_Roof");
		})  
		
		WA.room.area.onLeave('ApothekeRoom').subscribe(() => {
			WA.room.showLayer("Apotheke_Roof");
		})  

    } catch (error) {
        console.error('Scripting API Extra ERROR',error);
    }
}
extendedFeatures();

