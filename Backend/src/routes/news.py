from datetime import datetime
from flask import Blueprint, request, jsonify
from data.news import News
from database import database


blueprint = Blueprint("news", __name__)


@blueprint.route("/news/<id>", methods=["GET"])
def news(id):
    res = []
    for news in database.get_news_by_verein_id(id):
        res.append({
            "id_Profil": news.get_id_profil(),
            "text": news.get_text(),
            "timestamp": news.get_timestamp(),
        })
    return jsonify(res), 200, {"Content-Type": "application/json"}
