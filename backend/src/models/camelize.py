from humps import camelize
from pydantic import BaseModel, ConfigDict


class CamelModel(BaseModel):
    model_config = ConfigDict(populate_by_name=True, alias_generator=camelize, coerce_numbers_to_str=True)
