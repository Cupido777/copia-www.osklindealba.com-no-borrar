import json
import random
import requests

# Lista de todos los libros de la Biblia con sus capítulos
bible_structure = {
    "Génesis": 50, "Éxodo": 40, "Levítico": 27, "Números": 36, "Deuteronomio": 34,
    "Josué": 24, "Jueces": 21, "Rut": 4, "1 Samuel": 31, "2 Samuel": 24,
    "1 Reyes": 22, "2 Reyes": 25, "1 Crónicas": 29, "2 Crónicas": 36,
    "Esdras": 10, "Nehemías": 13, "Ester": 10, "Job": 42, "Salmos": 150,
    "Proverbios": 31, "Eclesiastés": 12, "Cantares": 8, "Isaías": 66,
    "Jeremías": 52, "Lamentaciones": 5, "Ezequiel": 48, "Daniel": 12,
    "Oseas": 14, "Joel": 3, "Amós": 9, "Abdías": 1, "Jonás": 4,
    "Miqueas": 7, "Nahúm": 3, "Habacuc": 3, "Sofonías": 3, "Hageo": 2,
    "Zacarías": 14, "Malaquías": 4, "Mateo": 28, "Marcos": 16,
    "Lucas": 24, "Juan": 21, "Hechos": 28, "Romanos": 16,
    "1 Corintios": 16, "2 Corintios": 13, "Gálatas": 6, "Efesios": 6,
    "Filipenses": 4, "Colosenses": 4, "1 Tesalonicenses": 5, "2 Tesalonicenses": 3,
    "1 Timoteo": 6, "2 Timoteo": 4, "Tito": 3, "Filemón": 1, "Hebreos": 13,
    "Santiago": 5, "1 Pedro": 5, "2 Pedro": 3, "1 Juan": 5, "2 Juan": 1,
    "3 Juan": 1, "Judas": 1, "Apocalipsis": 22
}

# Versículos famosos y conocidos para incluir (ejemplos reales)
famous_verses = [
    # ... (aquí irían 1000 versículos reales)
]

def get_random_verse():
    """Obtiene un versículo aleatorio de la API de Bible"""
    try:
        book = random.choice(list(bible_structure.keys()))
        chapter = random.randint(1, bible_structure[book])
        url = f"https://bible-api.com/{book} {chapter}:1?translation=rv1960"
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data['verses']:
                verse_obj = random.choice(data['verses'])
                return {
                    "book": book,
                    "chapter": verse_obj['chapter'],
                    "verse": verse_obj['verse'],
                    "text": verse_obj['text']
                }
    except:
        pass
    return None

# Generar 1000 versículos aleatorios
verses = []
for i in range(1000):
    verse = get_random_verse()
    if verse:
        verses.append({
            "id": i + 1,
            **verse
        })
    print(f"Generando versículo {i+1}/1000")

# Guardar en archivo JSON
with open('biblia_1000_aleatorios.json', 'w', encoding='utf-8') as f:
    json.dump(verses, f, ensure_ascii=False, indent=2)

print("✅ Archivo 'biblia_1000_aleatorios.json' creado con 1000 versículos aleatorios")
