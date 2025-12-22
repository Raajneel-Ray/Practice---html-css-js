import json as js;
data = {'name': 'Alice', 'age': 30, 'city': 'New York'}
json_string = js.dumps(data)        
print(json_string)
parsed_data = js.loads(json_string)
print(parsed_data)
print(parsed_data['name'])
print(parsed_data['age'])
print(parsed_data['city'])