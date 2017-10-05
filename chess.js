/*********************************
 *  Chapter 2 Program Structure  *
 *             Chess             *
 *       Exercise, page 41       *
**********************************/

function chess() {
	const hashes = '# # # #';
	for(i = 0; i < 8; i++) {
		if(i % 2 == 0) {
			console.log(' ' + hashes);
		}
		else {
			console.log(hashes);
		}
	}
}
chess();
