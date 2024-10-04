import { styleTags, tags as t } from '@lezer/highlight';

export const pgHighlighting = styleTags({
    'do continue else elsif for foreach goto if last next redo return unless until when while': t.controlKeyword,
    'bless local my our state sub': t.definitionKeyword,
    'package use no import require parent base': t.moduleKeyword,
    'constant feature lib subs async prototype': t.modifier,
    'NamedUnaryOperator ListOperator Eval each exec fork getpid grep': t.function(t.keyword),
    'join keys map pop print printf push say shift sort splice system time times': t.function(t.keyword),
    'unpack unshift values wait wantarray': t.function(t.keyword),
    'BeginPG EndPG': t.keyword,
    'BEGIN CHECK END INIT UNITCHECK': t.processingInstruction,
    '__FILE__ __LINE__ __PACKAGE__ __SUB__': t.literal,
    'ScalarVariable SpecialScalarVariable ArrayVariable HashVariable': t.variableName,
    'ArrayLength/Identifier Prototype Constant/Identifier': t.variableName,
    'PackageVariable/PackageVariableName/... PackageName/ScalarVariable': t.variableName,
    PGVariable: t.special(t.variableName),
    'PackageName/Identifier PackageName/UnrestrictedIdentifier': t.namespace,
    'PackageName/ArrayVariable PackageName/HashVariable SUPER': t.namespace,
    'NamedType/...': t.typeName,
    Name: t.name,
    'Label/Identifier LabelName/Identifier STDIN STDERR STDOUT IOOperator/Identifier': t.labelName,
    'MemberExpression/Identifier': t.propertyName,
    'MemberExpression/ScalarVariable': t.special(t.propertyName),
    'FunctionName/PackageName/... FunctionName/Identifier': t.function(t.definition(t.variableName)),
    UpdateOp: t.updateOperator,
    'ArithOp "*" % "/"': t.arithmeticOperator,
    'LogicOp and not or xor : FileTestOp': t.logicOperator,
    BitOp: t.bitwiseOperator,
    '<<': t.special(t.bitwiseOperator),
    'CompareOp < lt gt le ge eq ne cmp isa': t.compareOperator,
    '=': t.definitionOperator,
    '$ $# @ % & "*" ArrowOperator \\': t.derefOperator,
    'ScalarDereference/{ ScalarDereference/}': t.derefOperator,
    'ArrayDereference/{ ArrayDereference/}': t.derefOperator,
    'HashDereference/{ HashDereference/}': t.derefOperator,
    'FunctionDereference/{ FunctionDereference/}': t.derefOperator,
    'TypeGlobDereference/{ TypeGlobDereference/}': t.derefOperator,
    'ConcatOp BindingOp RangeOp RefOp x': t.operator,
    Comment: t.lineComment,
    Integer: t.integer,
    Float: t.float,
    'StringSingleQuoted StringDoubleQuoted q qq qx */StringContent */InterpolatedStringContent': t.string,
    '*/QuoteLikeStartDelimiter QuoteLikeSeparatorDelimiter */QuoteLikeEndDelimiter': t.string,
    'qw QWListContent/... Pair/Identifier HashAccessVariable/Identifier Version': t.string,
    'HeredocInitializer/... HeredocEndIdentifier Glob LaTeXImageCodeStart': t.string,
    'm qr s tr y RegexOptions': t.special(t.string),
    'PodStatement EndDataStatement/...': t.blockComment,
    EscapeSequence: t.escape,
    'Comma FatComma': t.punctuation,
    '( )': t.paren,
    '[ ]': t.squareBracket,
    '{ }': t.brace,
    '; :: :': t.separator
});
