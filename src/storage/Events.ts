import moment from "moment";

export const Events = [
	{
		id: "5737772d-0516-4e5f-baa5-5e3f69cb0f60",
		name: "Letné piatky pred SND v Bratislave",
		host: "Činohra SND",
		description:
			"Slovenské národné divadlo v letnom období otvára svoj netradičný divadelný priestor pred novou budovou, kde prináša projekt Letné piatky. Každý piatok sa divákom predstavia rôzne divadelné zoskupenia, individuálni tvorcovia i performeri z rôznych častí Slovenska. Bude to bohatá žánrová ponuka činoherných, performatívnych, tanečných i hudobných predstavení a koncertov. Okrem piatkov bude naše námestie patriť aj detským predstaveniam v prvú a poslednú augustovú nedeľu. Vstup je zdarma.",
		location: "Slovenské národné divadlo, Bratislava",
		eventDate: "2020-06-03T20:00:00+02:00",
		eventEnds: "2020-06-18T23:00:00+02:00",
	},
	{
		id: "4345ec8b-3c0a-41ba-9974-46799d451517",
		name: "Kultúrne leto v Ružinove 2020",
		host: "Cultus Ružinov, Kino Nostalgia",
		description:
			"Tohtoročné Kultúrne leto v Ružinove so sebou prinesie okrem bohatého filmového programu pod holým nebom v Amfiteátri pri Štrkoveckom jazere a Ružinovských komunitných jarmokov aj bezplatné meditačné cvičenia Yogy s Fredym Ayisim, chôdzu so špeciálnymi chodeckými paličkami Nordic walking či Tai-či pre seniorov v Parku A. Hlinku. Kultúrne leto si pre Ružinovčanov pripravila mestská časť v spolupráci s Cultus Ružinov, Ružinovským športovým klubom a s Kinom Nostalgia. Všetky podujatia v rámci Kultúrneho leta v Ružinove sú zadarmo.",
		location: "Bratislava - Ružinov, Bratislava",
		eventDate: "2020-08-05T10:00:00+02:00",
		eventEnds: "2020-08-28T20:00:00+02:00",
	},
	{
		id: "3514c27f-1dc8-4cfc-89ee-91e33785965e",
		name: "Urban Market 2020 (Special Edition)",
		host: "Urban Market, ČO - Čerstvé Ovocie",
		description:
			"Urban Market vstupuje do svojej druhej dekády. Jarné vydanie sa uskutoční na Fakulte architektúry STU v Bratislave. Urban Market sa koná v spolupráci s Fakultou architektúry STU v Bratislave a spoločne prinesieme množstvo zaujímavého programu, dizajnu, architektúry a módy reagujúcej na súčasné témy. Viac info čoskoro.",
		location: "Fakulta architektúry STU, Bratislava",
		eventDate: "2020-09-04T14:00:00+02:00",
		eventEnds: "2020-09-06T18:00:00+02:00",
	},
].map((event) => ({
	...event,
	isPastEvent: moment(event.eventEnds).isBefore(moment(new Date())),
}));
