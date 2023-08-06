opcao = input('Deseja Realizar seu cadastro? Digite 1 para avançar ou 2 para cancelar: ')

if opcao == "1":
    nome = input('Olá tudo bem? Informe seu nome: ')
    cpf = input('Digite seu cpf: ')
    print('As informações estão corretas: '+ nome + '' + cpf +'?')
    print('obrigado')
    exit()
elif opcao == "2":
    print('saindo...')
    exit()
else:
    print('erro')

  
