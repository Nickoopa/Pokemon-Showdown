/**
* 1v1 Plugin
* because jd is a shit fucker
* by: panpawn
*/

exports.commands = {
	one: function (target, room, user, connection) {
		if (room.id !== '1v1') return this.sendReply("Hey u bish, get in 1v1 to use this command,,,");
		if (!this.canTalk()) return;
		if (!this.canBroadcast()) return;
		var one = toId(target);
		var reply = "";
		if (one === 'poll') {
			user.chat('/poll Which 1v1 Type?, reg, uu, ru, nu, lc, ubers, monoletter, monotype, monocolor, monopoke, monogen, cap, starters, eeveelutions, bst-based, l&e, inverse, metronome, mega evos, stabmons 1v1, aaa 1v1, abc cup, averagemons, abilityshift, balancedhackmons, ou choice, cc1v1, 2v2, other 2v2',room,connection);
		} else {
			if (!one || one === 'help' || one === 'help' || one === 'git') reply = "For help, see <a href=\"https://raw.githubusercontent.com/jd4565/Pokemon-Showdown/master/chat-plugins/1v1.js\">here</a>.";
		} else {
			switch (one) {
				case 'regular':
				case 'reg': reply += 			"Banlist is Sleep Inducing moves excluding rest, Focus Sash, and Ubers excluding Mega Gengar."; break;
				case 'onevone': reply +=		"Banlist includes Imprison/Transform on the same moveset, Sleep Inducing moves excluding rest, Moody, Imposter, Sturdy if it does not naturally obtain it, Parental Bond if it does not naturally obtain it, Focus Sash, and your pokemon must be level 100."; break;
				case 'uu': reply += 			"Anything OU or above."; break;
				case 'ru': reply += 			"Anything UU or above."; break;
				case 'ubers': reply +=			"Bring a team of ONE pokemon, Banlist is Sleep Inducing moves excluding rest, Focus Sash."; break;
				case 'nu': reply += 			"Anything RU or above."; break;
				case 'lc': reply += 			"Bring a team of ONE pokemon. These pokemon should be level 5. Banlist is Sleep Inducing moves excluding rest, Focus Sash."; break; 
				case 'ubers': reply += 			"Nothing but Ditto and Smeargle."; break;
				case 'monoletter': reply += 		"A random letter is picked, only Pokemon starting with this letter can be used. Banlist is Sleep inducing moves excluding rest, Focus Sash."; break;
				case 'monotype': reply += 		"A random type is picked, only Pokemon of this type can be used. Banlist is Sleep inducing moves excluding rest, Focus Sash."; break;
				case 'monocolor': reply +=		"A random color is picked, only Pokemon of this color can be used. Banlist is Sleep inducing moves excluding rest, Focus Sash. Helpul <a href=\"http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_color\">Link</a>."; break;
				case 'monopoke': reply +=  		"A random Pokemon is picked, and only that pokemon can be used. Banlist is Sleep inducing moves excluding rest, Focus Sash."; break;
				case 'monogen': reply += 		"A random Pokemon generation is picked, and only Pokemon from that gen can be used. Banlist is Sleep inducing moves excluding rest, Focus Sash."; break;
				case 'cap': reply += 			"Only Pokemon in the Create-a-Pokemon project can be used here. Ask staff for CAP Info. Banlist is Sleep inducing moves excluding rest, Focus Sash."; break;
				case 'eeveelutions': reply += 		"Only Eevee and its many evolutions can be used. Banlist is Sleep Inducing moves excluding rest, Focus sash."; break;
                		case 'lcstarters': reply +=  		"Only the first form of starter pokemon from and generation may be used. These pokemon should be level 5. Banlist is Sleep inducing moves excluding rest, Focus Sash."; break;
				case 'starters': reply +=		"Only Starter Pokemon (from any game) may be used."; break;
				case 'bstbased': reply += 		"Staff does !pickrandom 200-300, 300-400, 400-500, 500-600, 600-700, 700-800 Then, you must ONLY use pokemon within the range of base stat total chosen"; break;
				case 'inverse': reply += 		"1v1 Tour set in the Inverse Gamemode. Not-Very-Effective is not Super Effective and vice-versa. Banlist is Ambipom, Sleep Inducing moves, Focus Sash."; break;
				case 'metronome': reply +=		"Only the move metronome is allowed in this tour, but on any Pokemon with a BST of 600 or less. Here is the <a href=\"http://pastebin.com/fe2Xtg4L\">banlist</a>."; break;
				case 'megaevos': reply += 		"Custom Game format, this one allowing only Mega Evolutions to be used (with items other than mega stones). Here is its <a href=\"http://pastebin.com/d9pJWpya\">banlist</a>."; break;
				case 'stabmons': reply += 		"Bring a team of ONE pokemon. Pokemon may use any move sharing a type with them in addition to normally learned moves."; break;
				case 'alphabetcup': reply += 		"Bring a team of ONE pokemon. Abbreviated as \"abc cup,\" this is a 1v1 tour set in the alphabet cup <a href=\"http://www.smogon.com/forums/threads/alphabet-cup-other-metagame-of-the-month-march.3498167/\">tier</a>."; break;
				case 'averagemons': reply += 		"Bring a team of ONE pokemon. All stats of Pokemon are set to 100! See <a href=\"http://www.smogon.com/forums/threads/averagemons.3495527/\">here</a>."; break;
				case 'balancedhackmons':
				case 'bhacks': reply +=			"Straight up balanced hackmons 1v1. Almost anything goes. <a href=\"http://www.smogon.com/smog/issue21/hackmons\">Reference</a>. Selection: These tours require you to pick one Pokemon from a team of six."; break;
				case 'ou': reply += 			"Bring an OU team and pick one, forfeit/be disqualified if it dies."; break;
				case 'cc1v1': reply += 			"Six completely random (Moves, IVs, Species, Item, etc) pokemon are given to you to choose one. Pick the best one and try to win!"; break;
				case 'twovtwo': reply += 		"<br />" +
									"These tours are 2v2 but have the flavor of 1v1 as they are set in the Doubles format.<br />" +
									"- Reg 2v2: Everything banned in Smogon Doubles is banned here. 1 Focus sash maximum per team."; break;
			}
			this.sendReplyBox("<b>" + one + "</b> - " + reply);
		}
	}
};