const _0x32bc23 = _0x24be; function _0x24be(_0x5676d2, _0x416c94) { const _0x40e178 = _0x40e1(); return _0x24be = function (_0x24be06, _0x422faa) { _0x24be06 = _0x24be06 - 0x142; let _0x33a56f = _0x40e178[_0x24be06]; return _0x33a56f; }, _0x24be(_0x5676d2, _0x416c94); } (function (_0x2f16f6, _0x1ff60d) { const _0x306d31 = _0x24be, _0x4b8ec6 = _0x2f16f6(); while (!![]) { try { const _0x2d2997 = -parseInt(_0x306d31(0x1bf)) / 0x1 + -parseInt(_0x306d31(0x1af)) / 0x2 + parseInt(_0x306d31(0x1b0)) / 0x3 + -parseInt(_0x306d31(0x143)) / 0x4 * (parseInt(_0x306d31(0x183)) / 0x5) + parseInt(_0x306d31(0x16a)) / 0x6 + -parseInt(_0x306d31(0x1a2)) / 0x7 + -parseInt(_0x306d31(0x148)) / 0x8 * (-parseInt(_0x306d31(0x164)) / 0x9); if (_0x2d2997 === _0x1ff60d) break; else _0x4b8ec6['push'](_0x4b8ec6['shift']()); } catch (_0x5a3691) { _0x4b8ec6['push'](_0x4b8ec6['shift']()); } } }(_0x40e1, 0x4045b)); const queryInput = document[_0x32bc23(0x166)](_0x32bc23(0x199)), homeBtn = document[_0x32bc23(0x166)](_0x32bc23(0x15d)), searchBtn = document[_0x32bc23(0x166)](_0x32bc23(0x14e)), recentBtn = document[_0x32bc23(0x166)](_0x32bc23(0x155)), resultContainer = document[_0x32bc23(0x166)]('animeContainer'), sresultContainer = document[_0x32bc23(0x1b6)](_0x32bc23(0x149)), animeInfoContainer = document['getElementById'](_0x32bc23(0x146)), watchContainer = document['getElementById'](_0x32bc23(0x1a1)), mainLoading = document[_0x32bc23(0x166)](_0x32bc23(0x1c2)), pageTitle = document[_0x32bc23(0x166)](_0x32bc23(0x15b)), videoPlayer = document[_0x32bc23(0x166)](_0x32bc23(0x14d)), statsFrame = document[_0x32bc23(0x166)](_0x32bc23(0x160)), watchBtn = document['getElementById'](_0x32bc23(0x18b)); var dataTitle, dataEpisode, dataURL; const apiEndpoint = _0x32bc23(0x147); var youtubeLinks = [_0x32bc23(0x1c3), 'https://www.youtube.com/embed/nfAPAvGGH4g', 'https://www.youtube.com/embed/S7W135mNveI', _0x32bc23(0x1a4), _0x32bc23(0x169), _0x32bc23(0x16c), _0x32bc23(0x154), _0x32bc23(0x19c), 'https://www.youtube.com/embed/uwwU55zBYlQ'], randomLink = youtubeLinks[Math[_0x32bc23(0x1b4)](Math[_0x32bc23(0x1a6)]() * youtubeLinks[_0x32bc23(0x14c)])]; videoPlayer[_0x32bc23(0x150)] = randomLink; function updateUrl(_0xe82aa1) { window['history']['pushState']({}, '', _0xe82aa1); } const urlParams = new URLSearchParams(window['location'][_0x32bc23(0x157)]); let appParam = urlParams[_0x32bc23(0x145)]('app'); if (appParam == _0x32bc23(0x14b)) { const playerContainer = document[_0x32bc23(0x166)]('playerContainer'); playerContainer[_0x32bc23(0x159)][_0x32bc23(0x17b)] = _0x32bc23(0x197); const footerContainer = document[_0x32bc23(0x166)](_0x32bc23(0x1ab)); footerContainer[_0x32bc23(0x159)][_0x32bc23(0x17b)] = _0x32bc23(0x197); } searchBtn['addEventListener'](_0x32bc23(0x162), async function () { const _0x5c0736 = _0x32bc23; animeInfoContainer[_0x5c0736(0x159)][_0x5c0736(0x17b)] = 'none', sresultContainer[_0x5c0736(0x159)][_0x5c0736(0x17b)] = _0x5c0736(0x1c1), resultContainer[_0x5c0736(0x159)][_0x5c0736(0x17b)] = _0x5c0736(0x18f), mainLoading[_0x5c0736(0x159)][_0x5c0736(0x17b)] = _0x5c0736(0x1c1), pageTitle[_0x5c0736(0x17d)] = _0x5c0736(0x19b), recentBtn['style']['display'] = _0x5c0736(0x197), resultContainer[_0x5c0736(0x17d)] = '', updateUrl('/'); const _0x4ab0e8 = queryInput['value']; statsFrame[_0x5c0736(0x150)] = _0x5c0736(0x1ae) + _0x4ab0e8 + _0x5c0736(0x180); const _0xa158b7 = await fetch(_0x5c0736(0x1b9) + apiEndpoint + _0x5c0736(0x18c) + _0x4ab0e8 + _0x5c0736(0x1a8)), _0x4b689a = await _0xa158b7[_0x5c0736(0x14a)](); displayResults(_0x4b689a['results']); }); async function getSearchByEnter(_0x24404e) { const _0x595478 = _0x32bc23; if (_0x24404e[_0x595478(0x17f)] === 0xd) { animeInfoContainer[_0x595478(0x159)]['display'] = _0x595478(0x197), sresultContainer[_0x595478(0x159)]['display'] = 'flex', resultContainer[_0x595478(0x159)][_0x595478(0x17b)] = _0x595478(0x18f), mainLoading[_0x595478(0x159)][_0x595478(0x17b)] = 'flex', pageTitle['innerHTML'] = 'astream\x20-\x20watch\x20anime', recentBtn['style'][_0x595478(0x17b)] = _0x595478(0x197), resultContainer[_0x595478(0x17d)] = '', updateUrl('/'); const _0x2c4426 = queryInput[_0x595478(0x18e)]; statsFrame[_0x595478(0x150)] = _0x595478(0x1ae) + _0x2c4426 + _0x595478(0x180); const _0x50e0ed = await fetch(_0x595478(0x1b9) + apiEndpoint + _0x595478(0x18c) + _0x2c4426 + _0x595478(0x1a8)), _0x25c1a8 = await _0x50e0ed[_0x595478(0x14a)](); displayResults(_0x25c1a8[_0x595478(0x163)]); } } homeBtn[_0x32bc23(0x16d)](_0x32bc23(0x162), function () { const _0x4c5156 = _0x32bc23; appParam == _0x4c5156(0x14b) ? window[_0x4c5156(0x1a7)][_0x4c5156(0x189)] = _0x4c5156(0x1b1) : window['location'][_0x4c5156(0x189)] = '/'; }), recentBtn[_0x32bc23(0x16d)](_0x32bc23(0x162), async function () { const _0xc6aa93 = _0x32bc23; sresultContainer[_0xc6aa93(0x159)]['display'] = 'flex', resultContainer[_0xc6aa93(0x159)][_0xc6aa93(0x17b)] = 'grid', mainLoading[_0xc6aa93(0x159)][_0xc6aa93(0x17b)] = 'flex', recentBtn[_0xc6aa93(0x159)][_0xc6aa93(0x17b)] = _0xc6aa93(0x197); const _0x1d8c44 = await fetch(_0xc6aa93(0x1b9) + apiEndpoint + _0xc6aa93(0x1a0)), _0x7fc890 = await _0x1d8c44[_0xc6aa93(0x14a)](); displayRecent(_0x7fc890[_0xc6aa93(0x163)]); }); function displayRecent(_0x41a4d3) { const _0x4ce349 = _0x32bc23; sresultContainer[_0x4ce349(0x159)][_0x4ce349(0x17b)] = _0x4ce349(0x1c1), resultContainer['innerHTML'] = '', mainLoading['style']['display'] = _0x4ce349(0x197), _0x41a4d3[_0x4ce349(0x179)](_0x1ec3f3 => { const _0x1b08a2 = _0x4ce349, _0x20ed79 = document[_0x1b08a2(0x196)]('a'); subType = _0x1b08a2(0x1ad), episodeNumber = '' + _0x1ec3f3[_0x1b08a2(0x144)], !episodeNumber[_0x1b08a2(0x14c)] && (episodeNumber = _0x1b08a2(0x152)), _0x20ed79[_0x1b08a2(0x17d)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x1ec3f3[_0x1b08a2(0x1b7)] + _0x1b08a2(0x17c) + _0x1ec3f3['title'][_0x1b08a2(0x170)](_0x1b08a2(0x156), '') + '\x22>' + _0x1ec3f3['title'][_0x1b08a2(0x170)](_0x1b08a2(0x156), '') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22eps\x22>Episode\x20' + episodeNumber + _0x1b08a2(0x178), _0x20ed79[_0x1b08a2(0x16d)](_0x1b08a2(0x162), async function () { const _0x49af97 = _0x1b08a2; mainLoading['style'][_0x49af97(0x17b)] = 'flex', resultContainer[_0x49af97(0x159)][_0x49af97(0x17b)] = _0x49af97(0x197), updateUrl(_0x49af97(0x176) + _0x1ec3f3['id']), dataURL = '' + _0x1ec3f3['id']; const _0x3e8bae = await fetch(_0x49af97(0x1b9) + apiEndpoint + _0x49af97(0x17a) + _0x1ec3f3['id']), _0x53b55f = await _0x3e8bae[_0x49af97(0x14a)](); displayAnimeInfo(_0x53b55f); }), resultContainer[_0x1b08a2(0x1b5)](_0x20ed79); }); } function displayResults(_0x67b3a3) { const _0x30aaff = _0x32bc23; resultContainer[_0x30aaff(0x17d)] = '', sresultContainer[_0x30aaff(0x159)][_0x30aaff(0x17b)] = 'flex', mainLoading[_0x30aaff(0x159)]['display'] = _0x30aaff(0x197), _0x67b3a3[_0x30aaff(0x179)](_0x23a260 => { const _0x5958f5 = _0x30aaff, _0x3c68f1 = document[_0x5958f5(0x196)]('a'); subType = _0x5958f5(0x1a9) + _0x23a260['subOrDub'][_0x5958f5(0x186)]() + _0x5958f5(0x151) + _0x23a260[_0x5958f5(0x1b3)] + _0x5958f5(0x1ba), releaseDate = '' + _0x23a260[_0x5958f5(0x194)][_0x5958f5(0x170)]('Released:\x20', ''), !releaseDate[_0x5958f5(0x14c)] && (releaseDate = _0x5958f5(0x152)), _0x3c68f1['innerHTML'] = _0x5958f5(0x19e) + _0x23a260[_0x5958f5(0x1b7)] + _0x5958f5(0x17c) + _0x23a260[_0x5958f5(0x15b)][_0x5958f5(0x170)](_0x5958f5(0x156), '') + '\x22>' + _0x23a260[_0x5958f5(0x15b)][_0x5958f5(0x170)]('(Dub)', '') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22eps\x22>Year\x20' + releaseDate + '\x20(' + _0x23a260[_0x5958f5(0x1b3)] + 'bed)</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x3c68f1[_0x5958f5(0x16d)](_0x5958f5(0x162), async function () { const _0x13d578 = _0x5958f5; mainLoading[_0x13d578(0x159)][_0x13d578(0x17b)] = _0x13d578(0x1c1), resultContainer['style']['display'] = _0x13d578(0x197), updateUrl(_0x13d578(0x176) + _0x23a260['id']), dataURL = '' + _0x23a260['id']; const _0x527c8d = await fetch(_0x13d578(0x1b9) + apiEndpoint + '/anime/gogoanime/info/' + _0x23a260['id']), _0x20e2bd = await _0x527c8d[_0x13d578(0x14a)](); displayAnimeInfo(_0x20e2bd); }), resultContainer['appendChild'](_0x3c68f1); }); } let animeParam = urlParams[_0x32bc23(0x145)](_0x32bc23(0x181)); fetchAnimeInfo(); async function fetchAnimeInfo() { const _0x3fb73b = _0x32bc23; if (typeof animeParam !== _0x3fb73b(0x15a) && animeParam !== null) { recentBtn['style'][_0x3fb73b(0x17b)] = 'none', mainLoading[_0x3fb73b(0x159)]['display'] = _0x3fb73b(0x1c1), dataURL = '' + animeParam; const _0x3e9150 = await fetch(_0x3fb73b(0x1b9) + apiEndpoint + '/anime/gogoanime/info/' + animeParam), _0x4db28c = await _0x3e9150[_0x3fb73b(0x14a)](); displayAnimeInfo(_0x4db28c); } } function displayAnimeInfo(_0x2bff6a) { const _0x20d596 = _0x32bc23; animeInfoContainer[_0x20d596(0x159)][_0x20d596(0x17b)] = _0x20d596(0x171), resultContainer[_0x20d596(0x159)][_0x20d596(0x17b)] = _0x20d596(0x197), sresultContainer[_0x20d596(0x159)][_0x20d596(0x17b)] = _0x20d596(0x197), watchContainer[_0x20d596(0x159)][_0x20d596(0x17b)] = 'none', mainLoading['style'][_0x20d596(0x17b)] = _0x20d596(0x197); const _0x41502c = document[_0x20d596(0x166)](_0x20d596(0x19f)); _0x41502c[_0x20d596(0x17d)] = '' + _0x2bff6a[_0x20d596(0x15b)], dataTitle = '' + _0x2bff6a['title'], pageTitle[_0x20d596(0x17d)] = _0x2bff6a[_0x20d596(0x15b)][_0x20d596(0x186)]() + _0x20d596(0x1a5), statsFrame['src'] = _0x20d596(0x1ae) + _0x2bff6a['title'] + _0x20d596(0x1bc); const _0x5490ed = document[_0x20d596(0x166)]('status'); _0x5490ed[_0x20d596(0x17d)] = '' + _0x2bff6a[_0x20d596(0x142)]; const _0x312e02 = document['getElementById']('subordub'); _0x312e02[_0x20d596(0x17d)] = '' + _0x2bff6a['subOrDub']; const _0x59e287 = document[_0x20d596(0x166)]('type'); _0x59e287[_0x20d596(0x17d)] = '' + _0x2bff6a[_0x20d596(0x190)]; const _0x1aa846 = document[_0x20d596(0x166)](_0x20d596(0x191)); _0x1aa846[_0x20d596(0x17d)] = '' + _0x2bff6a[_0x20d596(0x16e)]['replace']('\x0a', _0x20d596(0x172)); const _0xccf3bc = document[_0x20d596(0x166)](_0x20d596(0x15c)); _0xccf3bc[_0x20d596(0x17d)] = '', _0x2bff6a[_0x20d596(0x167)]['sort']((_0x27e4fc, _0x170e00) => _0x170e00['number'] - _0x27e4fc['number']), _0x2bff6a[_0x20d596(0x167)][_0x20d596(0x179)](_0x5d7b9e => { const _0x596dac = _0x20d596, _0x1a5809 = document[_0x596dac(0x196)]('option'); _0x1a5809[_0x596dac(0x18e)] = _0x5d7b9e['id'], _0x1a5809[_0x596dac(0x17d)] = _0x596dac(0x153) + _0x5d7b9e['number'], _0xccf3bc['appendChild'](_0x1a5809); }), watchBtn[_0x20d596(0x16d)](_0x20d596(0x162), async function () { const _0x34ec36 = _0x20d596, _0x1bae91 = document['getElementById'](_0x34ec36(0x15e)); _0x1bae91[_0x34ec36(0x17d)] = '', watchContainer[_0x34ec36(0x159)][_0x34ec36(0x17b)] = _0x34ec36(0x197), mainLoading['style'][_0x34ec36(0x17b)] = 'flex'; var _0x44a2d8 = document[_0x34ec36(0x166)](_0x34ec36(0x15c)), _0xa31430 = _0x44a2d8[_0x34ec36(0x175)][_0x44a2d8['selectedIndex']]; dataEpisode = _0xa31430[_0x34ec36(0x15f)], addHistory(); const _0x367492 = document[_0x34ec36(0x166)]('selectElement')['value'], _0x5545e2 = await fetch(_0x34ec36(0x1b9) + apiEndpoint + _0x34ec36(0x18d) + _0x367492), _0x53e280 = await _0x5545e2[_0x34ec36(0x14a)](); displayWatchInfo(_0x53e280); }); } function displayWatchInfo(_0x480843) { const _0x533bdf = _0x32bc23; watchContainer[_0x533bdf(0x159)][_0x533bdf(0x17b)] = _0x533bdf(0x171), mainLoading['style'][_0x533bdf(0x17b)] = 'none'; const _0x4f51ba = document[_0x533bdf(0x166)](_0x533bdf(0x14f)); _0x4f51ba['href'] = _0x480843[_0x533bdf(0x185)]; const _0x230011 = document[_0x533bdf(0x166)](_0x533bdf(0x15e)); _0x230011[_0x533bdf(0x17d)] = '', _0x480843[_0x533bdf(0x19a)][_0x533bdf(0x179)](_0x91bf90 => { const _0x3a3468 = _0x533bdf, _0x116c31 = document[_0x3a3468(0x196)](_0x3a3468(0x1a3)); _0x116c31[_0x3a3468(0x18e)] = _0x91bf90[_0x3a3468(0x158)], _0x116c31[_0x3a3468(0x1b2)] = _0x3a3468(0x161); let _0x4eabd4 = _0x91bf90[_0x3a3468(0x182)][_0x3a3468(0x170)](_0x3a3468(0x165), _0x3a3468(0x193)); _0x116c31[_0x3a3468(0x17d)] = '' + _0x4eabd4, _0x230011[_0x3a3468(0x1b5)](_0x116c31); }); const _0x382743 = document[_0x533bdf(0x16f)](_0x533bdf(0x174)); for (let _0x4338b4 = 0x0; _0x4338b4 < _0x382743[_0x533bdf(0x14c)]; _0x4338b4++) { _0x382743[_0x4338b4]['addEventListener'](_0x533bdf(0x162), function () { const _0x4d7fad = _0x533bdf, _0x59dd22 = this[_0x4d7fad(0x18e)]; let _0x12ce00 = 'https://corsbypass.herokuapp.com/', _0x4e04f3 = _0x12ce00 + _0x59dd22; appParam == _0x4d7fad(0x14b) ? updateUrl('?playInApp=' + _0x4e04f3) : videoPlayer[_0x4d7fad(0x150)] = _0x4d7fad(0x19d) + _0x4e04f3; }); }; } const spanElement = document[_0x32bc23(0x166)](_0x32bc23(0x1bd)); let contentDonate = ['<span>Support\x20this\x20website\x20by\x20making\x20a\x20donation\x20starting\x20from\x201$!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONATE</a>', _0x32bc23(0x16b)], indexDonate = 0x0; setInterval(function () { const _0x3ffb63 = _0x32bc23; spanElement['innerHTML'] = contentDonate[indexDonate], indexDonate = (indexDonate + 0x1) % contentDonate[_0x3ffb63(0x14c)]; }, 0x1388); function getTimeDifference(_0x1e1b94) { const _0x4f8b0f = _0x32bc23, _0x3b6300 = new Date(), _0x49c239 = new Date(_0x1e1b94), _0xb99cc8 = _0x3b6300 - _0x49c239, _0x68f1b2 = Math[_0x4f8b0f(0x1b4)](_0xb99cc8 / 0x3e8), _0x3a13dc = Math[_0x4f8b0f(0x1b4)](_0x68f1b2 / 0x3c), _0x412ece = Math[_0x4f8b0f(0x1b4)](_0x3a13dc / 0x3c), _0x316fe8 = Math['floor'](_0x412ece / 0x18), _0x4e2fc6 = Math[_0x4f8b0f(0x1b4)](_0x316fe8 / 0x7), _0x11884a = Math['floor'](_0x316fe8 / 0x1e), _0x192e6f = Math['floor'](_0x316fe8 / 0x16d); let _0x1a9fe7; if (_0x68f1b2 < 0x3c) _0x1a9fe7 = _0x68f1b2 + '\x20second' + (_0x68f1b2 === 0x1 ? '' : 's') + _0x4f8b0f(0x1b8); else { if (_0x3a13dc < 0x3c) _0x1a9fe7 = _0x3a13dc + '\x20minute' + (_0x3a13dc === 0x1 ? '' : 's') + _0x4f8b0f(0x1b8); else { if (_0x412ece < 0x18) _0x1a9fe7 = _0x412ece + '\x20hour' + (_0x412ece === 0x1 ? '' : 's') + '\x20ago'; else { if (_0x316fe8 < 0x7) _0x1a9fe7 = _0x316fe8 + _0x4f8b0f(0x17e) + (_0x316fe8 === 0x1 ? '' : 's') + _0x4f8b0f(0x1b8); else { if (_0x4e2fc6 < 0x4) _0x1a9fe7 = _0x4e2fc6 + '\x20week' + (_0x4e2fc6 === 0x1 ? '' : 's') + _0x4f8b0f(0x1b8); else _0x11884a < 0xc ? _0x1a9fe7 = _0x11884a + '\x20month' + (_0x11884a === 0x1 ? '' : 's') + '\x20ago' : _0x1a9fe7 = _0x192e6f + _0x4f8b0f(0x1ac) + (_0x192e6f === 0x1 ? '' : 's') + _0x4f8b0f(0x1b8); } } } } return _0x1a9fe7; } const epsSelect = document[_0x32bc23(0x166)](_0x32bc23(0x15c)); function firstEps() { const _0x48d882 = _0x32bc23; epsSelect['selectedIndex'] = epsSelect[_0x48d882(0x175)][_0x48d882(0x14c)] - 0x1; } function prevEps() { const _0x41c5e4 = _0x32bc23; epsSelect[_0x41c5e4(0x184)] < epsSelect[_0x41c5e4(0x175)]['length'] - 0x1 && epsSelect[_0x41c5e4(0x184)]++; } function nextEps() { epsSelect['selectedIndex'] > 0x0 && epsSelect['selectedIndex']--; } function lastEps() { const _0x226e4e = _0x32bc23; epsSelect[_0x226e4e(0x184)] = 0x0; } function closeHistory() { const _0x25e7b7 = _0x32bc23; let _0x133a95 = document[_0x25e7b7(0x166)](_0x25e7b7(0x192)); _0x133a95['style']['display'] = _0x25e7b7(0x197); } closeHistory(); function showHistory() { const _0x48c25f = _0x32bc23; let _0x4e75f5 = document[_0x48c25f(0x166)](_0x48c25f(0x192)); _0x4e75f5[_0x48c25f(0x159)]['display'] = _0x48c25f(0x1c1), historyReload(); } function _0x40e1() { const _0x161a46 = ['searchBtn', 'downloadButton', 'src', 'Dir\x22>', '???', 'Episode\x20', 'https://www.youtube.com/embed/5xkzzO5nNow', 'recentBtn', '(Dub)', 'search', 'url', 'style', 'undefined', 'title', 'selectElement', 'homeBtn', 'serverSelect', 'innerText', 'statsFrame', 'pill-button', 'click', 'results', '8512362deQgav', 'default', 'getElementById', 'episodes', 'parse', 'https://www.youtube.com/embed/IUtFAblCT1o', '1675620lUgXBU', '<span>Dukung\x20website\x20ini\x20dengan\x20cara\x20berdonasi\x20mulai\x20dari\x20Rp1000!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONASI</a>', 'https://www.youtube.com/embed/Wi6tTATXnaw', 'addEventListener', 'description', 'querySelectorAll', 'replace', 'block', '<br><br>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>', '.pill-button', 'options', '/?anime=', 'getItem', '\x20(Subbed)</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'forEach', '/anime/gogoanime/info/', 'display', '\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22name\x22\x20title=\x22', 'innerHTML', '\x20day', 'keyCode', '&type=Search', 'anime', 'quality', '223690LAGUgT', 'selectedIndex', 'download', 'toLowerCase', 'stringify', 'date', 'href', 'push', 'episodeButton', '/anime/gogoanime/', '/anime/gogoanime/watch/', 'value', 'grid', 'type', 'videoDescription', 'dim', 'auto', 'releaseDate', 'history', 'createElement', 'none', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/?anime=', 'queryInput', 'sources', 'astream\x20-\x20watch\x20anime', 'https://www.youtube.com/embed/PgAswqBtrUk', '/player/?url=', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', 'videoTitle', '/anime/gogoanime/recent-episodes', 'qualityContainer', '34209xABSsa', 'button', 'https://www.youtube.com/embed/X1M69l7ZGlw', '\x20-\x20astream', 'random', 'location', '?page=1', '<div\x20class=\x22', '</a>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22date\x22>-\x20', 'footerContainer', '\x20year', '<div\x20class=\x22subDir\x22>SUB</div>', 'stats.html?data=', '769142MLZDkb', '209388DwJTKl', '/?app=true', 'className', 'subOrDub', 'floor', 'appendChild', 'querySelector', 'image', '\x20ago', 'https://', '</div>', 'historyList', '&type=Watch', 'spanDonate', 'History\x20empty', '150049nzpUet', 'setItem', 'flex', 'mainLoading', 'https://www.youtube.com/embed/3yOVIxOHiaw', 'status', '44xgjQhu', 'episodeNumber', 'get', 'animeInfoContainer', 'api.consumet.org', '8ALMcMo', '.container-sresult', 'json', 'true', 'length', 'player']; _0x40e1 = function () { return _0x161a46; }; return _0x40e1(); } function addHistory() { const _0x137a18 = _0x32bc23; let _0x44d8ff = new Date(); const _0x23aa3f = { 'date': _0x44d8ff, 'title': dataTitle + '\x20' + dataEpisode, 'url': dataURL }; let _0x53cdaa = JSON[_0x137a18(0x168)](localStorage[_0x137a18(0x177)](_0x137a18(0x195))); if (_0x53cdaa == null) { const _0x3093bf = []; _0x3093bf[_0x137a18(0x18a)](_0x23aa3f), localStorage[_0x137a18(0x1c0)](_0x137a18(0x195), JSON['stringify'](_0x3093bf)); } else _0x53cdaa[_0x137a18(0x14c)] >= 0xa && _0x53cdaa['shift'](), _0x53cdaa[_0x137a18(0x18a)](_0x23aa3f), localStorage['setItem'](_0x137a18(0x195), JSON[_0x137a18(0x187)](_0x53cdaa)); } const historyLists = document['getElementById'](_0x32bc23(0x1bb)); var timedifference; function historyReload() { const _0x3742de = _0x32bc23; let _0x2c3a92 = JSON['parse'](localStorage[_0x3742de(0x177)](_0x3742de(0x195))); if (_0x2c3a92 != null) { historyLists[_0x3742de(0x17d)] = ''; for (let _0x4b5e90 = _0x2c3a92[_0x3742de(0x14c)] - 0x1; _0x4b5e90 >= 0x0; _0x4b5e90--) { timedifference = getTimeDifference(_0x2c3a92[_0x4b5e90][_0x3742de(0x188)]), historyLists['innerHTML'] += _0x3742de(0x198) + _0x2c3a92[_0x4b5e90][_0x3742de(0x158)] + '\x22>' + _0x2c3a92[_0x4b5e90][_0x3742de(0x15b)] + _0x3742de(0x1aa) + timedifference + _0x3742de(0x173); } } else historyLists['innerHTML'] = _0x3742de(0x1be); } historyReload(); function clearHistory() { const _0x143d1d = _0x32bc23; localStorage['removeItem'](_0x143d1d(0x195)), historyReload(); }