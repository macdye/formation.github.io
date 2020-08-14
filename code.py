import numpy as np
import pandas as pd

simplon = np.array([["les maths", "le SQL", "parler de servers", "Python", "chercher des stages"],
["parler d'enfants", "plus de SQL", "les pcs Shadow", "les exercices alambiqués", "les potits chiens"]])


def create_message(answer):
    if answer == 1:
        message = messages[0]
    elif answer == 2: 
        message = messages[1]
    elif answer == 3: 
        message = messages[2]
    elif answer ==4: 
        message = messages[3]
    elif answer == 5: 
        message = messages[4]
    elif answer < 1 or answer > 5:
        message = messages[5]
    else:
        message = messages[6]
    return message

# Faire un tableau des résultats possibles
messages = [ 
    "Vous aimez " + simplon[0,0] + " et aussi " + simplon[1,0],
    "Vous aimez " + simplon[0,1] + " et aussi " + simplon[1,1],
    "Vous aimez " + simplon[0,2] + " et aussi " + simplon[1,2],
    "Vous aimez " + simplon[0,3] + " et aussi " + simplon[1,3],
    "Vous aimez " + simplon[0,4] + " et aussi " + simplon[1,4],
    "Ce n'est pas un chiffre correct. Faut apprendre à lire.",
    "Allez, la bonneuh journée!"
]

# Afficher ces résultats
#print("Tu seras dans une de ses catégories :")
#for message in messages:
# print("- " + message)

answer = int(input("Qui préferez-vous? Jo = 1, Emma = 2, Arnaud = 3, Flo = 4, Perrine = 5 : \n> "))
message = create_message(answer)

print(message)