all:
	@protoc -I=. echo.proto \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:.

clean:
	@rm -f *.d.ts
