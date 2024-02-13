from pydantic import BaseModel, ConfigDict, alias_generators as ag
import re


class CamelModel(BaseModel):
    model_config = ConfigDict(populate_by_name=True, alias_generator=ag.to_camel, coerce_numbers_to_str=True)


