var fs = require('hexo-fs');

/**
 * Syntax:
 *   {%- loadHashFile('main.js','main.css') %}
 */

hexo.extend.helper.register('loadHashFile', function() {
    var result = '',
        content = fs.readFileSync('themes/' + this.config.theme + '/webpack-assets.json');
    var assets = JSON.parse(content);
    for (var i = 0, i_len = arguments.length; i < i_len; i++) {
        filename = arguments[i];
        if (i) {
            result += '\n';
        }
        file = filename.split('.');
        if (file[1] === 'js') {
            result += '<script src="' + this.url_for(assets[file[0]][file[1]]) + '"></script>';
        } else if (file[1] === 'css') {
            result += '<link rel="stylesheet" href="' + this.url_for(assets[file[0]][file[1]]) + '">';
        }
    }
    return result;
});
