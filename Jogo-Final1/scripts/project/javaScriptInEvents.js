

const scriptsInEvents = {

	async Folhaglobal_Event4_Act2(runtime, localVars)
	{
		const balaMapa = runtime.objects.balaMapa.getFirstPickedInstance();
		const ZumbiDaMorte = runtime.objects.ZumbiDaMorte.getFirstPickedInstance();
		
		if (balaMapa && ZumbiDaMorte) {
			balaMapa.destroy();  // some a bala
			ZumbiDaMorte.destroy();  //mata o zumbi
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
