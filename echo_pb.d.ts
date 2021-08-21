import * as jspb from 'google-protobuf'



export class Echo extends jspb.Message {
  getId(): string;
  setId(value: string): Echo;

  getType(): number;
  setType(value: number): Echo;

  getText(): string;
  setText(value: string): Echo;

  getNumeric(): number;
  setNumeric(value: number): Echo;

  getElementCase(): Echo.ElementCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Echo.AsObject;
  static toObject(includeInstance: boolean, msg: Echo): Echo.AsObject;
  static serializeBinaryToWriter(message: Echo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Echo;
  static deserializeBinaryFromReader(message: Echo, reader: jspb.BinaryReader): Echo;
}

export namespace Echo {
  export type AsObject = {
    id: string,
    type: number,
    text: string,
    numeric: number,
  }

  export enum ElementCase { 
    ELEMENT_NOT_SET = 0,
    TEXT = 16,
    NUMERIC = 17,
  }
}

