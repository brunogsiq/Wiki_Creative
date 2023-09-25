    var index = 1; 

    function leftPad (str, len, ch)
    {
        str = str + '';
        len = len - str.length;
        if (len <= 0) return str;
        if (!ch && ch !== 0) ch = ' ';
        ch = ch + '';
        if (ch === ' ' && len < 10) return cache[len] + str;
        var pad = '';
        while (true)
        {
          if (len & 1) pad += ch;
          len >>= 1;
          if (len) ch += ch;
          else break;
        }
        return pad + str;
      }

      function fillZeroToLeft(num, qtde)
      {
       return leftPad(num, qtde, '0')  
      };

      console.log('Data Programada: ' + fillZeroToLeft(7, 5) )