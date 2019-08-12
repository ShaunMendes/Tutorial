from http.server import BaseHTTPRequestHandler, HTTPServer
import socketserver
import json


class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        self.wfile.write(json.dumps(
            {"name": "shaun"}, sort_keys=True).encode())

    def do_HEAD(self):
        self._set_headers()

    def do_POST(self):
        # <--- Gets the size of data
        content_length = int(self.headers['Content-Length'])
        # <--- Gets the data itself
        post_data = self.rfile.read(content_length)
        print(post_data.decode('utf-8'))
        self._set_headers()
        self.wfile.write(post_data)


def run(server_class=HTTPServer, handler_class=S, port=2000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print('Starting httpd...')
    httpd.serve_forever()


run()
