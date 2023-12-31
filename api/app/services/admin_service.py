import secrets
from typing import Dict

from ..models import User
from .pocketbase_client import pocketbase_client

class AdminService:
    def __init__(self, user: User):
      self.user = user
      self.client = pocketbase_client

    def generate_api_key(self):
        return 'fg_' + secrets.token_urlsafe(32)

    def issue_apikey(self, key_to_create: dict) -> Dict:
        key_to_create['owner'] = self.user.id
        key_to_create['key'] = self.generate_api_key()

        return self.client.save_apikey(key_to_create)

    def verify_apikey(self, apikey: str) -> Dict:
        return self.client.verify_apikey(apikey, self.user.id)

    def get_apikeys(self) -> Dict:
        return self.client.get_apikeys(self.user.id)

    def delete_apikey(self, apikey_id: str) -> Dict:
        key_info = self.client.get_apikey(apikey_id)

        if key_info.get('owner') != self.user.id:
            raise Exception('Not allowed to delete this apikey')

        return self.client.delete_apikey(apikey_id)
