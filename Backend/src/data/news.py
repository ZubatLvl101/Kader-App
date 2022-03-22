from datetime import datetime

class News:
    def __init__(self, id:int, id_profil:int, id_verein:int, text:str, timestamp:datetime):
        self.id = id
        self.id_profil = id_profil
        self.id_verein = id_verein
        self.text = text
        self.timestamp = timestamp

    def __str__(self):
        return f"""User
                ID_Profil: {self.id_profil}
                ID_Verein: {self.id_verein}
                Text: {self.text}
                Timestamp: {self.timestamp}"""

    def get_id(self):
        return self.id

    def get_id_profil(self):
        return self.id_profil

    def set_id_profil(self, id_profil):
        self.id_profil = id_profil
    
    def get_id_verein(self):
        return self.id_verein

    def set_id_verein(self, id_verein):
        self.id_verein = id_verein

    def get_text(self):
        return self.text

    def set_text(self,text):
        self.text = text

    def get_timestamp(self):
        return self.timestamp

    def set_timestamp(self,timestamp):
        self.timestamp = timestamp