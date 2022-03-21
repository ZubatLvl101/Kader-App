from datetime import datetime
import pymssql
from data.user import User

server = "192.168.2.197"
db_user = "sa"
db_password = "Duefelsiek1!"
database = "Kada-App"

def login(e_mail, password):
    query_select = "SELECT us.id AS ANZAHL FROM [USER] us WHERE us.E_MAIL = %s AND us.PASSWORT = %s"
    query_update = "UPDATE PROFIL SET LOGIN_STATUS = 1 WHERE USE_ID = %s"
    con = pymssql.connect(
        server=server, user=db_user, password=db_password, database=database
    )
    cur = con.cursor()
    cur.execute(query_select, (e_mail, password))
    res = cur.fetchone()
    if res is not None:
        (res,) = res
    cur.execute(query_update, (res,))
    con.commit()
    cur.close()
    con.close()
    return res


def logout(id):
    query_update = "UPDATE PROFIL SET LOGIN_STATUS = 0 WHERE USE_ID = %s"
    con = pymssql.connect(
        server=server, user=db_user, password=db_password, database=database
    )
    cur = con.cursor()
    cur.execute(query_update, (id,))
    con.commit()
    cur.close()
    con.close()


def create_user(user: User):
    query_mail = "SELECT COUNT(*) FROM [USER] WHERE E_MAIL = %s"
    query_user = "INSERT INTO [USER] (E_MAIL,PASSWORT,REGISTRIEUNGSDATUM, USERNAME) OUTPUT INSERTED.ID VALUES (%s,%s,%s,%s)"
    query_profile = "INSERT INTO PROFIL (LOGIN_STATUS, [NAME],use_id) VALUES (0,%s,%s)"
    con = pymssql.connect(server=server, user=db_user,
                          password=db_password, database=database)
    cur = con.cursor()
    cur.execute(query_mail, (user.get_e_mail(),))
    res, = cur.fetchone()
    if (res > 0):
        cur.close()
        con.close()
        return False
    cur.execute(query_user, (user.get_e_mail(), user.get_password(),
                user.get_register_date(), user.get_username()))
    res, = cur.fetchone()
    cur.execute(query_profile, (user.get_username(), res))
    con.commit()
    cur.close()
    con.close()
    return True