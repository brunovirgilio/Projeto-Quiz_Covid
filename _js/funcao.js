cont = 0
        n=document.getElementById('resp')
        p=document.getElementById('pergunta')
        r=document.getElementById('resposta')
        r1=document.getElementsByTagName('p')[1]
        r2=document.getElementsByTagName('p')[2]
        r3=document.getElementsByTagName('p')[3]
        r4=document.getElementsByTagName('p')[4]
        h1=document.getElementsByTagName('h2')[1]
        var nome

        function pergunta1(){
            nome=document.getElementById('resp').value
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-microscopio.jpg'
            p.innerHTML='<h2>1. Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?</h2><p>1) Tem entre 2 a 4 litros. São retirados 450 mililitros<br>2) Tem entre 4 a 6 litros. São retirados 450 mililitros<br>3) Tem 10 litros. São retirados 2 litros<br>4)Tem 7 litros. São retirados 1,5 litros<br>5) Tem 0,5 litros. São retirados 0,5 litros<br></p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r4.innerHTML=' '
            r2.innerHTML='<p onclick="confirma1()">Confirma</p>'            
        }

        function confirma1(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta2()">Próxima</p>'
        }
        
        function pergunta2(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-grecia2.jpg'
            p.innerHTML='<h2>2. De quem é a famosa frase “Penso, logo existo”?</h2><p>1) Platão<br>2) Galileu Galilei<br>3) Descartes<br>4) Sócrates<br>5) Francis Bacon</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma2()">Confirma</p>'            
        }
        function confirma2(){
            if(Number(n.value)==3){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 3 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta3()">Próxima</p>'
        }
        function pergunta3(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-chuveiro3.jpg'
            p.innerHTML='<h2>3. De onde é a invenção do chuveiro elétrico?</h2><p>1) França<br>2) Inglaterra<br>3) Brasil<br>4) Austrália<br>5) Itália</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma3()">Confirma</p>'      
        }
        function confirma3(){
            if(Number(n.value)==3){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 3 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta4()">Próximo</p>'
        }
        function pergunta4(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-mapa4.jpg'
            p.innerHTML='<h2>4. Quais o menor e o maior país do mundo?</h2><p>1) Vaticano e Rússia<br>2) Nauru e China<br>3) Mônaco e Canadá<br>4) Malta e Estados Unidos<br>5) São Marino e Índia</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma4()">Confirma</p>'      
        }
        function confirma4(){
            if(Number(n.value)==1){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 1 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta5()">Próximo</p>'
        }
        function pergunta5(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-brasilia5.jpg'
            p.innerHTML='<h2>5. Qual o nome do presidente do Brasil que ficou conhecido como Jango?</h2><p>1) Jânio Quadros<br>2) Jacinto Anjos<br>3) Getúlio Vargas<br>4) João Figueiredo<br>5) João Goulart</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma5()">Confirma</p>'      
        }
        function confirma5(){
            if(Number(n.value)==5){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 5 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta6()">Próximo</p>'
        }
        function pergunta6(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-palavra6.jpg'
            p.innerHTML='<h2>6. Qual o grupo em que todas as palavras foram escritas corretamente?</h2><p>1) Asterístico, beneficiente, meteorologia, entertido<br>2) Asterisco, beneficente, meteorologia, entretido<br>3) Asterisco, beneficente, metereologia, entretido<br>4) Asterístico, beneficiente, metereologia, entretido<br>5) Asterisco, beneficiente, metereologia, entretido</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma6()">Confirma</p>'      
        }
        function confirma6(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta7()">Próximo</p>'
        }
        function pergunta7(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-livro7.jpg'
            p.innerHTML='<h2>7. Qual o livro mais vendido no mundo a seguir à Bíblia?</h2><p>1) O Senhor dos Anéis<br>2) Dom Quixote<br>3) O Pequeno Príncipe<br>4) Ela, a Feiticeira<br>5) Um Conto de Duas Cidades</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma7()">Confirma</p>'      
        }
        function confirma7(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta8()">Próximo</p>'
        }
        function pergunta8(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-aula8.jpg'
            p.innerHTML='<h2>8. Quantas casas decimais tem o número pi?</h2><p>1) Duas<br>2) Centenas<br>3) Infinitas<br>4) Vinte<br>5) Milhares</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma8()">Confirma</p>'      
        }
        function confirma8(){
            if(Number(n.value)==3){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 3 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta9()">Próximo</p>'
        }
        function pergunta9(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-quimica9.jpg'
            p.innerHTML='<h2>9. Atualmente, quantos elementos químicos a tabela periódica possui?</h2><p>1) 113<br>2) 109<br>3) 108<br>4) 118<br>5) 92<br></p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma9()">Confirma</p>'      
        }
        function confirma9(){
            if(Number(n.value)==4){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 4 é a correta. '
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta10()">Próximo</p>'
        }
        function pergunta10(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/foto-idoso10.jpg'
            p.innerHTML='<h2>10. Quais os países que têm a maior e a menor expectativa de vida do mundo?</h2><p>1) Japão e Serra Leoa<br>2) Austrália e Afeganistão<br>3) Itália e Chade<br>4) Brasil e Congo<br>5) Estados Unidos e Angola</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma10()">Confirma</p>'      
        }
        function confirma10(){
            if(Number(n.value)==1){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 1 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="resultado()">Resultado</p>'
        }
        function resultado(){
            p.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML='<a href="principal.html">Refazer</a>'
            if(cont==0){
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, você precisa ter mais conhecimento.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final1.jpg'
            }
            else if(cont>=1 && cont<=3){
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, seu conhecimento é regular, pesquise mais.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final2.jpg'
            }
            else if(cont>=4 && cont<=7){
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, você tem um bom conhecimento, mas pode melhorar.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final3.jpg'
            }
            else{
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, PARABÉNS você tem muito conhecimento.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final4.jpg'
            }
        }