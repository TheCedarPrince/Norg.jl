var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Norg","category":"page"},{"location":"#Norg","page":"Home","title":"Norg","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Norg.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"index.md\"]","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Norg]","category":"page"},{"location":"#Norg.Norg","page":"Home","title":"Norg.Norg","text":"Norg.jl provides a way to parse Neorg files in pure Julia.\n\nIt overloads Base.parse with custom targets. So far the only available target is HTMLTarget.\n\nExample usage :\n\nusing Norg, Hyperscript\nparse(HTMLTarget, \"Read {https://github.com/nvim-neorg/norg-specs}[the spec !]\")\n\n\n\n\n\n","category":"module"},{"location":"internals/#Norg-internals","page":"Internals","title":"Norg internals","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"This page describes the internal of Norg.jl and how it parses .norg files.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"pages=\"internals.md\"","category":"page"},{"location":"internals/#Tokens","page":"Internals","title":"Tokens","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.Tokens]","category":"page"},{"location":"internals/#Norg.Tokens","page":"Internals","title":"Norg.Tokens","text":"Provides the tokens for the tokenizer.\n\nA Token stores its value, a TokenType and a TokenPosition\n\n\n\n\n\n","category":"module"},{"location":"internals/#Norg.Tokens.Token-Union{Tuple{T}, Tuple{T, Any, Any, Any}} where T<:Norg.Tokens.TokenType","page":"Internals","title":"Norg.Tokens.Token","text":" Token(line, char, type, value)\n\nCreate a Token of type type with value value at line and char number char.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Norg.Tokens.char-Tuple{Norg.Tokens.TokenPosition}","page":"Internals","title":"Norg.Tokens.char","text":"char(x)\n\nReturn the character number in the line corresponding to position or token x.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Norg.Tokens.line-Tuple{Norg.Tokens.TokenPosition}","page":"Internals","title":"Norg.Tokens.line","text":"line(x)\n\nReturn the line number corresponding to the position or token x.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Scanners","page":"Internals","title":"Scanners","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.Scanners]","category":"page"},{"location":"internals/#Norg.Scanners","page":"Internals","title":"Norg.Scanners","text":"Provides the scanners for the tokenizer.\n\nThe role of a scanner is to recognize a sequence of characters and to produce a Token or nothing from that.\n\n\n\n\n\n","category":"module"},{"location":"internals/#Norg.Scanners.NORG_LINE_ENDING","page":"Internals","title":"Norg.Scanners.NORG_LINE_ENDING","text":"All the UTF-8 characters that Norg specifies as a whitespace.\n\n\n\n\n\n","category":"constant"},{"location":"internals/#Norg.Scanners.NORG_PUNCTUATION","page":"Internals","title":"Norg.Scanners.NORG_PUNCTUATION","text":"All the UTF-8 characters that are punctuation in Norg specification. See the norg specification\n\n\n\n\n\n","category":"constant"},{"location":"internals/#Norg.Scanners.REGISTERED_TOKENTYPES","page":"Internals","title":"Norg.Scanners.REGISTERED_TOKENTYPES","text":"All the registered TokenType that scan will try when consuming entries.\n\n\n\n\n\n","category":"constant"},{"location":"internals/#Norg.Scanners.scan","page":"Internals","title":"Norg.Scanners.scan","text":"scan([[pattern,] tokentype,] input; line=nothing, charnum=nothing)\n\nScan the given input for the given tokentype. It will produce a Token or nothing if the input does not match the tokentype.\n\nline and charnum are intended to give the current position in the buffer.\n\nIf no tokentype is provided, will try the ones in REGISTERED_TOKENTYPES until one returns a Token or throw an error if none succeed.\n\nIf pattern is given, then try to fit the given patter at the start of input. If pattern is :\n\na Char : first character must be pattern for a match.\nan AbstractString : input must startswith pattern.\nan AbstractArray : call scan on each element of pattern until one matches.\na Set{Char} : first character must be included in pattern.\n\n\n\n\n\n","category":"function"},{"location":"internals/#Tokenize","page":"Internals","title":"Tokenize","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.Tokenize]","category":"page"},{"location":"internals/#Norg.Tokenize","page":"Internals","title":"Norg.Tokenize","text":"The role of this module is solely to produce a DataStructures.Queue of tokens from an input.\n\n\n\n\n\n","category":"module"},{"location":"internals/#AST","page":"Internals","title":"AST","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.AST]","category":"page"},{"location":"internals/#Norg.AST","page":"Internals","title":"Norg.AST","text":"This module defines the Abstract Syntax Trees (AST) associated with the norg format.\n\n\n\n\n\n","category":"module"},{"location":"internals/#Norg.AST.FirstClassNode","page":"Internals","title":"Norg.AST.FirstClassNode","text":"Type of nodes that can be direct child of a NorgDocument\n\n\n\n\n\n","category":"type"},{"location":"internals/#Match","page":"Internals","title":"Match","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.Match]","category":"page"},{"location":"internals/#Norg.Match","page":"Internals","title":"Norg.Match","text":"This module exports match_norg which matches token sequences to AST.NodeData types.\n\n\n\n\n\n","category":"module"},{"location":"internals/#Norg.Match.match_norg","page":"Internals","title":"Norg.Match.match_norg","text":"match_norg([[firstparenttype], astnodetype], token, parents, tokens, i)\n\nFind the appropriate AST.NodeData for a token when parser is inside a parents block parsing the tokens list at index i.\n\nIf astnodetype is set, try to match an AST node of the given type. Return  nothing if it fails. If firstparenttype is given, the matching is altered with the correspondig context. This allows disabling some features in e.g.  verbatim context.\n\nReturn a Norg.Match.MatchResult.\n\nWhen astnodetype is not specified, must return a Norg.Match.MatchFound or a Norg.Match.MatchClosing.\n\n\n\n\n\n","category":"function"},{"location":"internals/#Parser","page":"Internals","title":"Parser","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.Parser]","category":"page"},{"location":"internals/#Norg.Parser","page":"Internals","title":"Norg.Parser","text":"This module defines the Norg.Parser.parse_norg function, which builds an AST from a token list.\n\nThe role of Norg.Parser.parse is to consume tokens. To do so, it  relies on Norg.Match.match_norg to take decisions on how to consume tokens.\n\n\n\n\n\n","category":"module"},{"location":"internals/#Base.parse-Tuple{Type{Norg.AST.NorgDocument}, AbstractString}","page":"Internals","title":"Base.parse","text":"parse(AST.NorgDocument, s)\n\nProduce an AST.NorgDocument from a string s. Calls Tokenize.tokenize.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Norg.Parser.consume_until-Union{Tuple{T}, Tuple{Type{T}, Any, Any}} where T<:Norg.Tokens.TokenType","page":"Internals","title":"Norg.Parser.consume_until","text":"consume_until(T, tokens, i)\n\nConsume tokens until a token of type T is encountered, or final token is reached.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Norg.Parser.parse_norg","page":"Internals","title":"Norg.Parser.parse_norg","text":"parse_norg(nodetype, tokens, i)\n\nTry to parse the tokens sequence starting at index i as a nodetype.\n\n\n\n\n\n","category":"function"},{"location":"internals/#Norg.Parser.parse_norg-Tuple{Any}","page":"Internals","title":"Norg.Parser.parse_norg","text":"parse_norg(tokens)\n\nTry to parse the tokens sequence as an AST.NorgDocument starting from the begining of the sequence.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Codegen","page":"Internals","title":"Codegen","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [Norg.Codgen]","category":"page"}]
}
