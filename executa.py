
def get_lista(txt):

    arq = open(txt+".txt", 'r')
    arquivo =arq.read()
    return arquivo.split('\n')
    